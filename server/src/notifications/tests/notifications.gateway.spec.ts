import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MailerModule } from '@nestjs-modules/mailer';
import { io } from 'socket.io-client';

import { NotificationsModule } from '@/notifications/notifications.module';
import { RolesService } from '@/roles/roles.service';
import {
	closeMongoConnection,
	rootMongooseTestModule,
} from '@/test-utils/MongooseTestModule';
import { RegisterUserDtoStub } from '@/users/tests/stubs/register-user.dto.stub';
import { UsersModule } from '@/users/users.module';
import { User } from '@/users/users.schema';
import { UsersService } from '@/users/users.service';

import { NotificationsService } from '../notifications.service';

let app: INestApplication;
let usersService: UsersService;
let notificationsService: NotificationsService;
let rolesService: RolesService;
let user: User;

async function createUser(email = 'test@example.com'): Promise<User> {
	await rolesService.createRole({
		value: 'USER',
		description: 'User role',
	});

	return await usersService.createUser(RegisterUserDtoStub(email));
}

describe('Notifications Gateway Test', () => {
	beforeAll(done => {
		done();
	});

	beforeEach(async () => {
		const testingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(true),
				MailerModule.forRoot({
					transport: {
						host: process.env.SMTP_HOST,
						port: process.env.SMTP_PORT,
						// requireTLS: true,
						secure: false,
						auth: {
							user: process.env.SMTP_USER,
							pass: process.env.SMTP_PASS,
						},
					},
				}),
				NotificationsModule,
				UsersModule,
			],
		}).compile();
		app = testingModule.createNestApplication();
		await app.init();

		usersService = testingModule.get<UsersService>(UsersService);
		notificationsService =
			testingModule.get<NotificationsService>(NotificationsService);
		rolesService = testingModule.get<RolesService>(RolesService);
	});

	it(`should test basic connection`, done => {
		const address = app.getHttpServer().listen().address();
		const baseAddress = `http://[${address.address}]:${address.port}`;

		const ws = io(baseAddress);

		ws.on('connect', () => {
			console.log('Socket.IO connection opened');
			ws.close();
			done();
		});
	});

	it(`should create user, subscribe for notifications and get updated user`, async () => {
		const address = app.getHttpServer().listen().address();
		const baseAddress = `http://[${address.address}]:${address.port}`;

		/* `user = await createUser();` is calling the `createUser()` function and assigning the returned
		`User` object to the `user` variable. The `createUser()` function creates a new user using the
		`UsersService` and `RegisterUserDtoStub`, which is a test utility function that returns a mock user
		object. This is done to ensure that there is a user in the database to subscribe to notifications
		and receive the test notification. */
		user = await createUser();

		const ws = io(baseAddress);

		await new Promise<void>(resolve => {
			ws.on('connect', async () => {
				ws.emit('subscribeToNotifications', JSON.stringify({ id: user._id }));
			});

			/* 
			This code block is setting a timeout of 1 second before creating a new system notification using the
			`notificationsService.createSystemNotification()` method. The purpose of this timeout is to ensure
			that the WebSocket client has enough time to connect to the server and subscribe to notifications
			before a new notification is created. This is important because the test is designed to check if the
			client receives the notification after subscribing to notifications, and if the notification is
			created before the client has subscribed, the test may fail. 
			
			! This was made to ensure we successfuly subscribed to receive notifications
			*/
			setTimeout(async () => {
				console.log('waited one second before creating notification!');

				const notification =
					await notificationsService.createSystemNotification({
						system_message: 'New notification!',
						userid: user._id,
					});

				console.log(notification);
			}, 1000);

			ws.on(`notification-${user._id}`, async newNotification => {
				try {
					/* 
					`expect(newNotification.fullDocument.system_message).toBe('New notification!')` is an assertion that
					checks if the `system_message` property of the `fullDocument` object in the `newNotification` event
					received by the WebSocket client is equal to the string `'New notification!'`. If the assertion
					passes, the test will continue to run. If it fails, the test will fail and an error message will be
					displayed. 
					*/
					// TODO: Handle resolve on error here
					expect(newNotification.system_message).toBe('New notification!');

					/*
					`ws.disconnect();` is a method call that disconnects the client from the WebSocket server. In this
					case, it is used to disconnect the client after the test has been completed and the expected
					notification has been received. 
					*/
					ws.disconnect();

					/* 
					* This code block is checking if the web socket connection is active or not. If it is not active, it
					* logs a message saying that it has disconnected from the web socket. It then sets a timeout of 3
					* seconds before resolving the promise, which will end the test. 
					
					! This is done to ensure that gateway automatically closes changeStream and connection to client. 
					*/
					if (!ws.active) {
						console.log('disconnected from web socket');
						setTimeout(() => {
							console.log('changeStream should be closed now -- stop timer!');
							resolve();
						}, 3000);
					}
				} catch (err) {
					/*
					! THIS BLOCK IS REPONSIBLE for properly closing all connections and passing message back to jest
					*/
					ws.disconnect();

					/* 
					* This code block is checking if the web socket connection is active or not. If it is not active, it
					* logs a message saying that it has disconnected from the web socket. It then sets a timeout of 3
					* seconds before resolving the promise, which will end the test. 
					
					! This is done to ensure that gateway automatically closes changeStream and connection to client. 
					*/
					if (!ws.active) {
						console.log('disconnected from web socket');
						setTimeout(() => {
							console.log('changeStream should be closed now -- stop timer!');
							resolve();

							/* 
							`throw new Error(err.message);` is throwing an error with the message contained in the `err` object.
							This is done to ensure that the test fails if there is an error in the `try` block, and the error
							message is displayed in the console. 
							*/
							throw new Error(err.message);
						}, 3000);
					}
				}
			});
		});
	});

	afterEach(async () => {
		await closeMongoConnection();
		await app.close();
	});

	afterAll(async () => {
		// Closing the DB connection allows Jest to exit successfully.
		await closeMongoConnection();
	});
});
