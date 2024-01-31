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
  Delete,
  Param,
  Patch,
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
import { ChatGroupService } from './chat.group.service';
import { QueryChatGroupDto } from './dto/query-chat-group.dto';
import { ChatGroup } from './entities/chat.group.entity';
import { ReadMessagesDto } from './dto/read-messages.dto';
import { request } from 'http';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { PatchMessagesDto } from './dto/patch-message.dto';

@ApiTags('Chat')
@Controller({
  path: 'chat',
  version: '1',
})
export class ChatController {
  constructor(
    private readonly messageService: MessageService,
    private readonly chatGroupService: ChatGroupService
  ) {}

  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @Get('/message')
  async findAllMessages(@Request() request, @Query() query: QueryMessageDto) {
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

  @Post('/message/send')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createMessage(@Request() request, @Body() dto: CreateMessageDto) {
    return await this.messageService.createMessage(request.user.id, dto);
  }

  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @Get('/group')
  async findAllChatGroups(@Request() request, @Query() query: QueryChatGroupDto) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 50;

    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.chatGroupService.findManyWithPagination({
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

  @Delete('/message/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMessage(@Param('id') id: string, @Request() { user }: { user: JwtPayloadType }) {
    return await this.messageService.softDelete(id, user.id);
  }

  @Patch('/message/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.OK)
  async patchMessage(
    @Body() dto: PatchMessagesDto,
    @Request() { user }: { user: JwtPayloadType },
    @Param('id') id: string
  ) {
    return await this.messageService.patchMessage(id, dto, user.id);
  }

  // ----------------------------------------------

  @Post('/group')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createChatGroup(@Request() request, @Body() dto: CreateChatGroupDto) {
    return await this.chatGroupService.createGroup(request.user.id, dto);
  }

  @Delete('/group/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteChatGroup(@Param('id') id: string, @Request() { user }: { user: JwtPayloadType }) {
    return await this.chatGroupService.softDelete(id, user.id);
  }
}
