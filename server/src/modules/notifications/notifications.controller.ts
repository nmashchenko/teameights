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
  Query,
  SerializeOptions,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RoleEnum } from '../../libs/database/metadata/roles/roles.enum';
import { RolesGuard } from '../../libs/database/metadata/roles/roles.guard';
import { Roles } from '../../libs/database/metadata/roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NullableType } from '../../utils/types/nullable.type';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Notification } from './entities/notification.entity';
import { infinityPagination } from '../../utils/infinity-pagination';
import { QueryNotificationDto } from './dto/query-notification.dto';

@ApiTags('Notifications')
@Controller({
  path: 'notifications',
  version: '1',
})
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createNotification(@Body() dto: CreateNotificationDto) {
    return await this.notificationService.createNotification(dto);
  }

  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findAll(@Request() request, @Query() query: QueryNotificationDto) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;

    if (limit > 10) {
      limit = 10;
    }

    return infinityPagination(
      await this.notificationService.findManyWithPagination({
        userJwtPayload: request.user,
        filterOptions: query?.filters,
        sortOptions: query?.sort,
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit }
    );
  }

  @SerializeOptions({
    groups: ['user'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number): Promise<NullableType<Notification>> {
    return this.notificationService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  async readUnreadNotification(@Request() request, @Param('id') id: number) {
    await this.notificationService.readNotification(id, request.user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNotification(@Request() request, @Param('id') id: number) {
    await this.notificationService.deleteNotification(id, request.user);
  }
}
