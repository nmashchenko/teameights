import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { NotificationsService } from './notifications.service';
import { Notifications } from './schemas/notifications.schema';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
	constructor(private notificationsService: NotificationsService) {}

	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Read notification by ID',
	})
	@ApiResponse({ status: 200, type: Notifications })
	@Put('/read/:notificationid')
	readNotification(
		@Param('notificationid') notificationid: mongoose.Types.ObjectId,
	) {
		return this.notificationsService.readNotification(notificationid);
	}
}
