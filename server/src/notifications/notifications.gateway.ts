import {
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { isValidObjectId, Types } from 'mongoose';
import { Subject } from 'rxjs';
import { Server } from 'socket.io';

import { NotificationsService } from './notifications.service';

@WebSocketGateway()
export class NotificationsGateway
	implements OnGatewayConnection, OnGatewayDisconnect
{
	constructor(private readonly notificationsService: NotificationsService) {}
	@WebSocketServer()
	server: Server;

	private connectedUsers: Map<string, Date> = new Map();
	private subject = new Subject<string>();

	@SubscribeMessage('subscribeToNotifications')
	async subscribeToNotifications(client: any, data: any) {
		try {
			const user = JSON.parse(data);
			if (isValidObjectId(user.id)) {
				await this.notificationsService.watchNotifications(
					new Types.ObjectId(user.id),
					this.server,
					this.subject,
				);
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

	handleConnection(client: any) {
		console.log(
			`Client ${client.id} connected to notifications WebSocket server`,
		);
		this.connectedUsers.set(client.id, new Date());
	}

	handleDisconnect(client: any) {
		console.log(
			`Client with id ${client.id} disconnected from notifications WebSocket server`,
		);
		this.subject.next(client.id);
		this.connectedUsers.delete(client.id);
	}
}
