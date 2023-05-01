import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role, RoleDocument } from './roles.schema';

@Injectable()
export class RolesService {
	constructor(
		@InjectModel(Role.name) private roleModel: Model<RoleDocument>,
	) {}

	async createRole(dto: CreateRoleDto): Promise<Role> {
		const role = await this.roleModel.create(dto);
		return role;
	}

	async getRoleByValue(value: string): Promise<Role> {
		const role = await this.roleModel.findOne({ value });
		return role;
	}

	async getRoleById(id: ObjectId): Promise<string> {
		const role = await this.roleModel.findById(id);
		return role.value;
	}
}
