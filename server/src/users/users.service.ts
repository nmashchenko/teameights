import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, FilterQuery, Model } from 'mongoose';
import * as uuid from 'uuid';

import { FileService, FileType } from '@/files/file.service';
import { NotificationsService } from '@/notifications/notifications.service';
import { RolesService } from '@/roles/roles.service';
import { TokensService } from '@/tokens/tokens.service';
import { userUpdateValidate } from '@/validation/user-update.validation';

import { BetaSignUpDto } from './dto/beta-sign-up.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { Results } from './dto/results.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		private roleService: RolesService,
		private tokenService: TokensService,
		private filesService: FileService,
		private notificationService: NotificationsService,
	) {}

	private getPath = (url: string, fileType: string): string => {
		// Extracting type
		const typeRegex = /\/([^/]+)\/[^/]+$/;
		const typeMatch = url.match(typeRegex);
		const type = typeMatch ? typeMatch[1] : null;

		// Extracting filename
		const filenameRegex = /\/([^/]+)$/;
		const filenameMatch = url.match(filenameRegex);
		const filename = filenameMatch ? filenameMatch[1] : null;

		console.log(`${type}/${filename}`);

		return `${fileType}/${type}/${filename}`;
	};

	/**
	 * It creates a user with the given data, and returns the created user
	 * @param {AuthUserDto} dto - AuthUserDto - this is the data transfer object that we created earlier.
	 * @param {ClientSession} [session] - This is the session that we created in the auth.service.ts file.
	 * @param {boolean} [oauth] - boolean - if the user is created via oauth, we don't need to send an
	 * activation email.
	 * @returns The user object is being returned.
	 */
	async createUser(
		dto: RegisterUserDto,
		session?: ClientSession,
		oauth?: boolean,
	): Promise<User> {
		const role = await this.roleService.getRoleByValue('USER');
		const activationLink = uuid.v4(); // generate activation link (v34fa-adsfaa-8138183-dwadw)
		const isRegistered = false;
		const isActivated = typeof oauth !== 'undefined' ? true : false;
		const user = await this.userModel.create(
			[
				{
					...dto,
					roles: [role._id],
					activationLink,
					isRegistered,
					isActivated,
					// programmingLanguages: [],
					notifications: [],
				},
			],
			{ session },
		);

		/* Creating a system notification for the user. */
		const notificationID =
			await this.notificationService.createSystemNotification(
				{
					userid: user[0]._id,
					system_message:
						'Welcome to teameights! We hope you will enjoy our platform. ',
				},
				session,
			);

		/* Adding a notification to the user's list of notifications. */
		await this.addNotification(user[0]._id, notificationID, session);

		(user[0] as any)._doc.roles = [role];
		(user[0] as any)._doc.notifications = [notificationID];
		return user[0];
	}

	/**
	 * It finds a user with the given activation link and updates the user's isActivated property to true
	 * @param {string} activationLink - The activation link that was sent to the user's email.
	 * @returns The user document that was updated.
	 */
	async verifyActivationLink(activationLink: string): Promise<User> {
		return await this.userModel.findOneAndUpdate(
			{ activationLink },
			{ isActivated: true },
		);
	}

	/**
	 * It returns a user by email
	 * @param {string} email - The email of the user we want to find.
	 * @param {ClientSession} [session] - This is the session that will be used to run the query.
	 * @returns A user object
	 */
	async getUserByEmail(
		email: string,
		session?: ClientSession,
	): Promise<User> {
		/* Checking if the session is undefined. If it is, it is returning the user. If it is not, it is
		returning the user with the session. */
		const user =
			typeof session !== 'undefined'
				? await this.userModel.findOne({ email }).session(session)
				: await this.userModel.findOne({ email });

		if (user) {
			await user.populate('roles');
			await user.populate('notifications');
			await user.populate('team');
		}

		return user;
	}

	/**
	 * It finds a user by their username and populates their roles
	 * @param {string} username - string - The username of the user to find.
	 * @param {ClientSession} [session] - This is an optional parameter that is used to pass a session to
	 * the database.
	 * @returns A user object
	 */
	async getUserByUsername(
		username: string,
		session?: ClientSession,
	): Promise<User> {
		/* Checking if the session is undefined. If it is, it is returning the user. If it is not, it is
		returning the user with the session. */
		const user =
			typeof session !== 'undefined'
				? await this.userModel.findOne({ username }).session(session)
				: await this.userModel.findOne({ username });

		if (user) {
			await user.populate('roles');
			await user.populate('notifications');
			await user.populate('team');
		}

		return user;
	}

	async getPartialUsernames(username: string): Promise<User[]> {
		const regex = new RegExp(username, 'i');

		return await this.userModel
			.find({ username: regex, team: null })
			.limit(5);
	}

	async getUserById(
		id: mongoose.Types.ObjectId,
		session?: ClientSession,
	): Promise<User> {
		/* Checking if the session is undefined. If it is, it is returning the user. If it is not, it is
		returning the user with the session. */
		const user =
			typeof session !== 'undefined'
				? await this.userModel.findById(id).session(session)
				: await this.userModel.findById(id);

		if (user) {
			await user.populate('roles');
			await user.populate('notifications');
			await user.populate('team');
		}

		return user;
	}

	/**
	 * "Given a token, return the user associated with that token."
	 *
	 * The first line of the function is a type annotation. It says that the function takes a string and
	 * returns a promise of a user
	 * @param {string} token - The token that was passed in the request
	 * @returns A User object
	 */
	async getUserByToken(token: string): Promise<User> {
		const userDto = this.tokenService.validateToken(
			token,
			process.env.JWT_ACCESS_KEY,
		);
		return await this.getUserByEmail(userDto.email);
	}

	/**
	 * It finds a user by email and updates the password with the new hash password
	 * @param {string} hashPassword - The hashed password that will be stored in the database.
	 * @param {string} email - The email of the user whose password we want to update.
	 * @returns The updated user.
	 */
	async updateUserPassword(
		hashPassword: string,
		email: string,
	): Promise<User> {
		return await this.userModel.findOneAndUpdate(
			{ email },
			{ password: hashPassword },
			{ new: true },
		);
	}

	/**
	 * It returns a promise that resolves to an array of users
	 * @returns An array of users
	 */
	async getAllUsers(): Promise<User[]> {
		return await this.userModel.find();
	}

	/**
	 * It gets all the users that are registered, calculates the total number of users, the last page and
	 * the limit, sets the number of users on the current page and the data of the users and returns the
	 * results object
	 * @param {number} page - The page number.
	 * @param {number} limit - The number of users that will be returned.
	 * @returns The results object.
	 */
	async getUsersByPage(page: number, limit: number): Promise<Results> {
		/* A type assertion. */
		const results = {} as Results;

		/* Calculating the total number of users, the last page and the limit. */
		results.total = await this.userModel.count();
		results.last_page = Math.ceil(results.total / limit);
		results.limit = limit;

		/* Getting all the users that are registered. */
		const users = await this.userModel
			.find({ isRegistered: true })
			.limit(limit)
			.skip((page - 1) * limit)
			.limit(limit)
			.populate('roles')
			.exec();

		/* Setting the number of users on the current page and the data of the users. */
		results.on_current_page = users.length;
		results.data = users;

		/* Returning the results object. */
		return results;
	}

	async getFilteredUsersByPage(
		page: number,
		limit: number,
		parsedQuery: FilterQuery<any>,
	): Promise<Results> {
		/* A type assertion. */
		const results = {} as Results;

		/* Getting the total number of users that match the query. */
		results.total = await this.userModel
			.find(parsedQuery as FilterQuery<any>)
			.count();

		/* Calculating the last page and the limit. */
		results.last_page = Math.ceil(results.total / limit);
		results.limit = limit;

		/* Getting all the users that match the query, limiting the number of users to the limit, skipping the
		users that are not on the current page, limiting the number of users to the limit, populating the
		roles and executing the query. */
		const users = await this.userModel
			/* Casting the parsedQuery to FilterQuery<any> */
			.find(parsedQuery as FilterQuery<any>)
			.limit(limit)
			.skip((page - 1) * limit)
			.limit(limit)
			.populate('roles')
			.exec();

		/* Setting the number of users on the current page and the data of the users. */
		results.on_current_page = users.length;
		results.data = users;
		/* Returning the results object. */
		return results;
	}

	/**
	 * It takes a FinishRegistrationDto object as an argument, checks if the user with the given email
	 * exists, updates the user with the given email with the new data and returns the updated user
	 * @param {FinishRegistrationDto} dto - FinishRegistrationDto - The data transfer object that contains
	 * the data that will be used to update the user.
	 * @returns The updated user.
	 */
	async updateUser(dto: UpdateUserDto): Promise<User> {
		/* Validating the DTO to prevent additional fields */
		const filtered = await userUpdateValidate(dto);

		let candidate = await this.getUserByEmail(dto.email);

		if (!candidate) {
			throw new HttpException(
				`User with email: ${dto.email} is not registered`,
				HttpStatus.BAD_REQUEST,
			);
		}

		if (dto?.username) {
			candidate = await this.getUserByUsername(dto.username);

			if (candidate) {
				throw new HttpException(
					`Username ${dto.username} is already taken`,
					HttpStatus.BAD_REQUEST,
				);
			}
		}

		/* 
		The above code is updating a user document in a MongoDB database using the Mongoose library. It
		first filters the data to be updated using a spread operator and sets the "isRegistered" field to
		true. Then it uses the "updateOne" method to update the document with the specified email. If the
		update is successful (i.e., the modifiedCount is 1), it fetches the updated document using the
		"findOne" method and returns it. If the update is not successful, it throws an HttpException with a
		message indicating an error occurred while updating the user. 
		
		This approach gurantees data consistency as we would wait for update and then get full object back.
		*/
		const updateResult = await this.userModel.updateOne(
			{ email: dto.email },
			{ ...filtered, isRegistered: true },
		);

		if (updateResult.modifiedCount === 1) {
			// Fetch the updated document
			const updatedDocument = await this.userModel.findOne({
				email: dto.email,
			});
			return updatedDocument;
		} else {
			// Handle the case when the update was not successful
			throw new HttpException(
				`Error while updating user`,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
		// const user = await this.userModel.findOneAndUpdate(
		// 	{ email: dto.email },
		// 	{ ...filtered, isRegistered: true },
		// 	{ new: true },
		// );

		// return user;
	}

	/**
	 * It takes a user's email and a base64 encoded image, creates a file in the static folder, updates the
	 * user's image property with the path to the newly created file and returns the updated user
	 * @param {UpdateAvatarDto} dto - UpdateAvatarDto - the data transfer object that contains the email
	 * and the image of the user.
	 * @returns The updated user.
	 */
	async updateAvatar(dto: UpdateAvatarDto): Promise<string> {
		const candidate = await this.getUserByEmail(dto.email);

		if (!candidate) {
			throw new HttpException(
				`User with email: ${dto.email} is not registered`,
				HttpStatus.BAD_REQUEST,
			);
		}

		/* Checking if the user has an image. If it does, it is removing the image. */
		if (candidate.image) {
			const path = this.getPath(candidate.image, 'image');
			await this.filesService.removeFromS3(path, 'teameights');
		}

		/* Creating a file in the static folder. */
		const filePath = await this.filesService.createFile(
			FileType.USERS,
			dto.image,
			'teameights',
		);

		/* Updating the user with the given email with the new data and returning the updated user. */
		await this.userModel.findOneAndUpdate(
			{ email: dto.email },
			{ image: filePath },
		);

		return filePath;
	}

	/**
	 * It adds a notification to a user's list of notifications
	 * @param userID - The ID of the user to add the notification to.
	 * @param notificationID - mongoose.Types.ObjectId
	 * @param {ClientSession} [session] - This is an optional parameter that is used to create a
	 * transaction.
	 */
	async addNotification(
		userID: mongoose.Types.ObjectId,
		notificationID: mongoose.Types.ObjectId,
		session?: ClientSession,
	): Promise<void> {
		const query = { _id: userID };
		const update = { $push: { notifications: notificationID } };
		if (typeof session !== 'undefined') {
			await this.userModel.updateOne(query, update).session(session);
		} else {
			await this.userModel.updateOne(query, update);
		}
	}

	/**
	 * It removes a notification from a user's list of notifications
	 * @param userID - The ID of the user to add the notification to.
	 * @param notificationID - mongoose.Types.ObjectId
	 * @param {ClientSession} [session] - This is an optional parameter that is used to create a
	 * transaction.
	 */
	async removeNotification(
		userID: mongoose.Types.ObjectId,
		notificationID: mongoose.Types.ObjectId,
		session?: ClientSession,
	): Promise<void> {
		const query = { _id: userID };
		const update = { $pull: { notifications: notificationID } };
		if (typeof session !== 'undefined') {
			await this.userModel.updateOne(query, update).session(session);
		} else {
			await this.userModel.updateOne(query, update);
		}
	}

	/**
	 * Check if notification was already sent.
	 *
	 * @param notificationID - The ID of the team.
	 */
	async checkNotifications(
		notificationID: mongoose.Types.ObjectId,
	): Promise<User> {
		return await this.userModel.findOne({
			notifications: { $in: [notificationID] },
		});
	}

	/**
	 * Add a team to a user.
	 *
	 * The first line of the function is a comment. It's a comment that describes the function
	 * @param userID - The ID of the user you want to add to a team.
	 * @param teamID - mongoose.Types.ObjectId
	 */
	async addTeam(
		userID: mongoose.Types.ObjectId,
		teamID: mongoose.Types.ObjectId,
	): Promise<void> {
		await this.userModel.updateOne({ _id: userID }, { team: teamID });
	}

	/**
	 * Remove a team from user.
	 *
	 * @param userID - The ID of the user you want to add to a team.
	 */
	async removeTeam(userID: mongoose.Types.ObjectId): Promise<void> {
		await this.userModel.updateOne(
			{ _id: userID },
			{ $unset: { team: null } },
		);
	}

	/**
	 * The function adds a user's email and IP address to a beta test list by creating a new text file
	 * using the `createFile` method of the `filesService` object.
	 * @param {BetaSignUpDto} dto - A data transfer object (DTO) containing information about a user
	 * signing up for a beta test. It likely includes the user's email address.
	 * @param {any} ip - The `ip` parameter is likely the IP address of the user who is signing up for the
	 * beta test. It is being passed to the `addUserToBetaTestList` method along with a `BetaSignUpDto`
	 * object that contains the user's email address. The method then formats this information
	 * @returns a string that contains the email and IP address of the user in a formatted string.
	 */
	async addUserToBetaTestList(dto: BetaSignUpDto, ip: any): Promise<string> {
		const email = dto.email;
		const formattedString = `email: ${email}\nip: ${ip}`;

		/* The above code is using the `await` keyword to asynchronously call the `createFile` method of the
		`filesService` object. The method takes three arguments: `FileType.TEXT`, `formattedString`, and
		`'t8s-betalist'`. It is likely that the `createFile` method creates a new file of type `text` with
		the contents of `formattedString` and saves it to a location named `'t8s-betalist'`. */
		await this.filesService.createFile(
			FileType.TEXT,
			formattedString,
			't8s-betalist',
		);

		return formattedString;
	}
}
