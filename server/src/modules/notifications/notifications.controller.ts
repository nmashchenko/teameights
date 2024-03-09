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
  HttpException,
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
import { ReadNotificationsDto } from './dto/read-notifications.dto';

@ApiTags('Notifications')
@Controller({
  path: 'notifications',
  version: '1',
})
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(RoleEnum.admin, RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createNotification(@Body() dto: CreateNotificationDto, @Request() request) {
    if (request.user.role.name !== 'Admin' && dto.type == 'system') {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          errors: {
            message: `Forbidden resource`,
          },
        },
        HttpStatus.FORBIDDEN
      );
    }
    return await this.notificationService.createNotification(dto, request.user.id);
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
    let limit = query?.limit ?? 50;

    if (limit > 50) {
      limit = 50;
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

  @Patch()
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  async readUnreadNotification(@Request() request, @Body() dto: ReadNotificationsDto) {
    await this.notificationService.readNotification(dto, request.user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNotification(@Request() request, @Param('id') id: number) {
    await this.notificationService.deleteNotificationByUser(id, request.user);
  }
}
