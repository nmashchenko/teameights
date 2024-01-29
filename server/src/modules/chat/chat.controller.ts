import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  Query,
  SerializeOptions,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/libs/database/metadata/roles/roles.decorator';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { QueryMessageDto } from './dto/query-message.dto';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { CreateMessageDto } from './dto/create-message.dto';
import { RolesGuard } from 'src/libs/database/metadata/roles/roles.guard';
import { CreateChatGroupDto } from './dto/create-chat-group.dto';

@ApiTags('Chat')
@Controller({
  path: 'chat',
  version: '1',
})
export class ChatController {
  constructor(private readonly messageService: MessageService) {}

  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findAll(@Request() request, @Query() query: QueryMessageDto) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 50;

    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.messageService.findManyWithPagination({
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

  @Post('')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createMessage(@Request() request, @Body() dto: CreateMessageDto) {
    return await this.messageService.createMessage(request.user, dto);
  }

  @Post('')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createChatGroup(@Request() request, @Body() dto: CreateChatGroupDto) {}
}
