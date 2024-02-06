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
  Res,
  Next,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/libs/database/metadata/roles/roles.decorator';
import { RoleEnum } from 'src/libs/database/metadata/roles/roles.enum';
import { QueryMessageDto } from './dto/query-message.dto';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { CreateMessageDto } from './dto/create-message.dto';
import { RolesGuard } from 'src/libs/database/metadata/roles/roles.guard';
import { CreateChatGroupDto } from './dto/create-chat-group.dto';
import { ChatGroupService } from './chatgroup/chat.group.service';
import { QueryChatGroupDto } from './dto/query-chat-group.dto';
import { JwtPayloadType } from '../auth/base/strategies/types/jwt-payload.type';
import { PatchMessagesDto } from './dto/patch-message.dto';
import { MessageService } from './message/message.service';
import { UUID } from 'crypto';

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

  //#region Post Message
  @Post('/message/send')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createMessage(@Request() request, @Body() dto: CreateMessageDto) {
    return await this.messageService.createMessage(request.user.id, dto);
  }
  //#endregion

  //#region Get Message
  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user, RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/message/filter')
  @HttpCode(HttpStatus.OK)
  async findAllMessages(
    @Request() { user }: { user: JwtPayloadType },
    @Query() query: QueryMessageDto
  ) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 50;

    if (limit > 50) limit = 50;
    return infinityPagination(
      await this.messageService.findManyWithPagination({
        userId: user.id,
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
  @ApiBearerAuth()
  @Roles(RoleEnum.user, RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/message/:id')
  @HttpCode(HttpStatus.OK)
  async getMessage(
    @Param('id') id: NonNullable<UUID>,
    @Request() { user }: { user: JwtPayloadType }
  ) {
    return this.messageService.findOne([
      { id: id, sender: { id: user.id } },
      { id: id, receivers: { id: user.id } },
    ]);
  }

  //#endregion

  //#region Patch Message
  @Patch('/message/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.OK)
  async patchMessage(
    @Body() dto: PatchMessagesDto,
    @Request() { user }: { user: JwtPayloadType },
    @Param('id') id: UUID
  ) {
    return await this.messageService.patchMessage(id, dto, user.id);
  }
  //#endregion

  //#region Delete Message
  @Delete('/message/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMessage(@Param('id') id: UUID, @Request() { user }: { user: JwtPayloadType }) {
    return await this.messageService.softDelete({ id: id, sender: { id: user.id } });
  }

  @Delete('/message')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAllMessages(@Request() { user }: { user: JwtPayloadType }) {
    return await this.messageService.softDelete({ sender: { id: user.id } });
  }
  //#endregion

  // -----------------------

  //#region Post ChatGroup
  @Post('/group')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async createChatGroup(@Request() request, @Body() dto: CreateChatGroupDto) {
    return await this.chatGroupService.createGroup(request.user.id, dto);
  }
  //#endregion

  //#region Delete ChatGroup
  @Delete('/group/:id')
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteChatGroup(@Param('id') id: UUID, @Request() { user }: { user: JwtPayloadType }) {
    return await this.chatGroupService.softDelete(id, user.id);
  }
  //#endregion

  //#region Get ChatGroup
  @SerializeOptions({
    groups: ['user'],
  })
  @ApiBearerAuth()
  @Roles(RoleEnum.user)
  @UseGuards(AuthGuard('jwt'))
  @Get('/group')
  @HttpCode(HttpStatus.OK)
  async findAllChatGroups(
    @Request() { user }: { user: JwtPayloadType },
    @Query() query: QueryChatGroupDto
  ) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 50;

    if (limit > 50) limit = 50;

    return infinityPagination(
      await this.chatGroupService.findManyWithPagination({
        userId: user.id,
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
  //#endregion
}
