import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import mongoose, { ObjectId, Types } from 'mongoose';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.schema';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
	constructor(private roleService: RolesService) {}

	@ApiOperation({ summary: 'Create role' })
	@ApiResponse({ status: 200, type: Role })
	@Post('/create-role')
	create(@Body() roleDto: CreateRoleDto) {
		return this.roleService.createRole(roleDto);
	}

	@ApiOperation({ summary: 'Get role by value' })
	@ApiResponse({ status: 200, type: Role })
	@Get('get-role/:value')
	getByValue(@Param('value') value: string) {
		return this.roleService.getRoleByValue(value);
	}

	@ApiOperation({ summary: 'Get role by id' })
	@ApiResponse({ status: 200, type: mongoose.Types.ObjectId })
	@Get('get-role-byid/:id')
	getRoleById(@Param('id') id: ObjectId) {
		return this.roleService.getRoleById(id);
	}
}
