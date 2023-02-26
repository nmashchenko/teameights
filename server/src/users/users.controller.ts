import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	Query,
	Req,
	UploadedFile,
	UseGuards,
	UseInterceptors,
	UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '@Auth/guards/jwt-auth.guard';
import { Roles } from '@Auth/guards/roles-auth.decorator';
import { RolesGuard } from '@Auth/guards/roles.guard';
import { ValidationPipe } from '@Pipes/validation.pipe';
import { User } from './users.schema';
import { UsersService } from './users.service';
import { Results } from './dto/results.dto';
import * as qs from 'qs';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import mongoose from 'mongoose';

@ApiTags('Users')
@Controller('/users')
export class UsersController {
	constructor(private userService: UsersService) {}

	@ApiOperation({
		summary:
			'Get specific user by email, returns null in case nothing found',
	})
	@ApiResponse({ status: 200, type: User })
	@Get('/get-by-email/:email')
	getByEmail(@Param('email') email: string) {
		return this.userService.getUserByEmail(email);
	}

	@ApiOperation({
		summary:
			'Get specific user by username, returns null in case nothing found',
	})
	@ApiResponse({ status: 200, type: User })
	@Get('/get-by-username/:username')
	getByUsername(@Param('username') username: string) {
		return this.userService.getUserByUsername(username);
	}

	@ApiOperation({
		summary: 'Get specific user by id, returns null in case nothing found',
	})
	@ApiResponse({ status: 200, type: User })
	@Get('/get-by-id/:id')
	getById(@Param('id') id: mongoose.Types.ObjectId) {
		return this.userService.getUserById(id);
	}

	@ApiOperation({
		summary: 'Get specific user by token',
	})
	@ApiResponse({ status: 200, type: User })
	@UseGuards(JwtAuthGuard)
	@Get('/get-by-token')
	getByToken(@Req() req: Request) {
		return this.userService.getUserByToken(
			req.headers.authorization.split(' ')[1],
		);
	}

	@ApiOperation({ summary: 'Get users' })
	@ApiResponse({ status: 200, type: [User] })
	@Get('/get-all')
	getAllUsers() {
		return this.userService.getAllUsers();
	}

	@ApiOperation({ summary: 'Get users by page' })
	@ApiResponse({ status: 200, type: Results })
	@ApiQuery({
		name: 'page',
		description: 'The page number to get',
		required: false,
		type: Number,
	})
	@Get('/get')
	getUsersByPage(@Query('page') pageNumber?: number) {
		/* A way to check if the pageNumber is a number or not. If it is not a number, it will return 1. */
		const page: number = parseInt(pageNumber as any) || 1;
		const limit: number = 9;
		return this.userService.getUsersByPage(page, limit);
	}

	@ApiOperation({ summary: 'Get filtered users by page' })
	@ApiResponse({ status: 200, type: Results })
	@ApiQuery({
		name: 'page',
		description: 'The page number to get',
		required: false,
		type: Number,
	})
	@ApiQuery({
		name: 'filtersQuery',
		description: `The filters that we get front end, don't forget to use let queryString = qs.stringify(filtersQuery) before sending to backend`,
		required: true,
		type: String,
	})
	@Get('/get-filtered')
	getFilteredUsersByPage(
		@Query('filtersQuery') filtersQuery: string,
		@Query('page') pageNumber?: number,
	) {
		const page: number = parseInt(pageNumber as any) || 1;
		const limit: number = 9;
		/* Parsing the query string into an object. */
		const parsedQuery = qs.parse(filtersQuery);

		return this.userService.getFilteredUsersByPage(
			page,
			limit,
			parsedQuery,
		);
	}

	@UsePipes(ValidationPipe)
	@UseGuards(JwtAuthGuard)
	@ApiOperation({
		summary: 'Update user details',
	})
	@ApiResponse({ status: 200, type: User })
	@Put('/update-user')
	updateUser(@Body() dto: UpdateUserDto) {
		return this.userService.updateUser(dto);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	@ApiOperation({
		summary: 'Update avatar of the user',
	})
	@ApiResponse({ status: 200, type: String })
	@Put('/update-avatar')
	updateAvatar(@Body() dto: UpdateAvatarDto) {
		return this.userService.updateAvatar(dto);
	}
}
