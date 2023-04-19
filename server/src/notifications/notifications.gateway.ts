import {
	WebSocketGateway,
	WebSocketServer,
	SubscribeMessage,
	MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NotificationsService } from './notifications.service';
import { Types } from 'mongoose';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway()
export class NotificationsGateway implements OnModuleInit {
	constructor(private readonly notificationsService: NotificationsService) {}
	@WebSocketServer()
	server: Server;

	onModuleInit() {
		this.server.on('connection', (socket) => {
			console.log(
				`New client with id: ${socket.id} connected to notifications WebSocket server`,
			);
		});
	}

	@SubscribeMessage('notificationUpdates')
	async handleConnection(@MessageBody() body: any) {
		// todo: make sure id passed is actual ID

		console.log(body);
		await this.notificationsService.watchNotifications(
			new Types.ObjectId('640c4dc2f0e1e2aa528b2b7b'),
			this.server,
		);
	}

	async handleDisconnect() {
		console.log('Client disconnected from notifications WebSocket server');
	}
}
