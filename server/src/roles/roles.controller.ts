import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import mongoose, { ObjectId } from 'mongoose';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.schema';
import { RolesService } from './roles.service';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/guards/roles-auth.decorator';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
	constructor(private roleService: RolesService) {}

	// !SECURITY ISSUE: implement isAdmin here
	@ApiOperation({ summary: 'Create role' })
	@ApiResponse({ status: 200, type: Role })
	// @Roles('ADMIN')
	// @UseGuards(RolesGuard)
	@Post('/create-role')
	create(@Body() roleDto: CreateRoleDto): Promise<Role> {
		return this.roleService.createRole(roleDto);
	}

	@ApiOperation({ summary: 'Get role by value' })
	@ApiResponse({ status: 200, type: Role })
	@Get('get-role/:value')
	getByValue(@Param('value') value: string): Promise<Role> {
		return this.roleService.getRoleByValue(value);
	}

	@ApiOperation({ summary: 'Get role by id' })
	@ApiResponse({ status: 200, type: mongoose.Types.ObjectId })
	@Get('get-role-byid/:id')
	getRoleById(@Param('id') id: ObjectId): Promise<string> {
		return this.roleService.getRoleById(id);
	}
}
