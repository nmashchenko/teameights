// import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { ReadNotificationsDto } from './dto/read-notifications.dto';
import { NotificationsService } from './notifications.service';
import { Notifications } from './schemas/notifications.schema';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
	constructor(private notificationsService: NotificationsService) {}

	// TODO: ADD here
	// @UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Read notification by ID',
	})
	@ApiResponse({ status: 200, type: Notifications })
	@Put('/read')
	readNotification(@Body() dto: ReadNotificationsDto) {
		return this.notificationsService.readNotification(dto);
	}
}
