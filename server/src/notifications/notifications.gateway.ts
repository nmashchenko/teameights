import { InjectModel } from '@nestjs/mongoose';
import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { isValidObjectId, Model, Types } from 'mongoose';
import { Server } from 'socket.io';

import { Notifications } from './schemas/notifications.schema';

@WebSocketGateway({
	cors: {
		// origin: process.env.CLIENT_URL,
		origin: '*',
	},
})
export class NotificationsGateway
	implements OnGatewayConnection, OnGatewayDisconnect
{
	private changestreamsMap = new Map();

	constructor(
		@InjectModel(Notifications.name)
		private readonly notificationModel: Model<Notifications>,
	) {}
	@WebSocketServer()
	server: Server;

	private connectedUsers: Map<string, Date> = new Map();

	@SubscribeMessage('subscribeToNotifications')
	async subscribeToNotifications(client: any, data: any): Promise<void> {
		try {
			const user = JSON.parse(data);
			if (isValidObjectId(user.id)) {
				const watchCursor = this.notificationModel.watch(
					[
						{
							$match: {
								'fullDocument.user': new Types.ObjectId(
									user.id,
								),
							},
						},
					],
					{ fullDocument: 'updateLookup' },
				);

				this.changestreamsMap.set(client.id, watchCursor);

				watchCursor.on('change', change => {
					console.log('Notification changed:', change);
					// Emit the change to subscribed clients

					this.server.emit(`notification-${user.id}`, change);
				});
			}
			console.log(
				`Client ${client.id} subscribed to notifications for user ${user.id}`,
			);
		} catch (e) {
			console.log(e.message);
			this.server.emit(`subscribeToNotificationsError`, e.message);
			this.handleDisconnect(client);
		}
	}

	handleConnection(client: any): void {
		console.log(
			`Client ${client.id} connected to notifications WebSocket server`,
		);
		this.connectedUsers.set(client.id, new Date());
	}

	handleDisconnect(client: any): void {
		console.log(
			`Client with id ${client.id} disconnected from notifications WebSocket server`,
		);
		// this.subject.next(client.id);
		const changeStream = this.changestreamsMap.get(client.id);
		if (changeStream) {
			changeStream.close();
			this.changestreamsMap.delete(client.id);
		}
		this.connectedUsers.delete(client.id);
	}
}
