import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../libs/database/metadata/roles/roles.enum';
import { RolesGuard } from '../../libs/database/metadata/roles/roles.guard';
import { Roles } from '../../libs/database/metadata/roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NullableType } from '../../utils/types/nullable.type';
import { ApiTags } from '@nestjs/swagger';
import { Notification } from './entities/notification.entity';

@ApiTags('Notifications')
@Controller({
  path: 'notifications',
  version: '1',
})
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createNotification(@Body() dto: CreateNotificationDto) {
    return await this.notificationService.createNotification(dto);
  }

  @SerializeOptions({
    groups: ['user'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number): Promise<NullableType<Notification>> {
    return this.notificationService.findOne({ id: +id });
  }

  @Get('user/:userid')
  async findNotificationByReceiver(@Param('userid') userid: number) {
    return await this.notificationService.findByReceiver(userid);
  }

  // add guard / httpcode
  @Patch(':id')
  async readUnreadNotification(@Param('id') id: number) {
    await this.notificationService.readNotification(id);
  }

  // add guard / httpcode
  @Delete(':id')
  async deleteNotification(@Param('id') id: number) {
    await this.notificationService.deleteNotification(id);
  }
}
