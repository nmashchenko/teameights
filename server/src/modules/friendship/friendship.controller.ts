import {
  Controller,
  Post,
  Patch,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  Body,
  Request,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UpdateStatusDto } from './dto/update-status.dto';
import { infinityPagination } from '../../utils/infinity-pagination';
import { QueryFriendshipDto } from './dto/query-friends.dto';

@ApiTags('Friendship')
@Controller({
  path: 'friendship',
  version: '1',
})
@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/:receiverId')
  @HttpCode(HttpStatus.CREATED)
  async create(@Param('receiverId') receiverId: number, @Request() req) {
    await this.friendshipService.createFriendship(req.user.id, receiverId);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Patch('/:creatorId')
  async updateStatus(
    @Param('creatorId') creatorId: number,
    @Body() dto: UpdateStatusDto,
    @Request() req
  ) {
    await this.friendshipService.updateStatus(creatorId, req.user.id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:friendId')
  async deleteRequestOrFriendship(@Param('friendId') friendId: number, @Request() req) {
    await this.friendshipService.deleteRequestOrFriendship(friendId, req.user.id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  async findAll(@Param('userId') userId: number, @Query() query: QueryFriendshipDto) {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 50;

    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.friendshipService.findManyWithPagination({
        userId: userId,
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
}
