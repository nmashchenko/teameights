import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]): CustomDecorator<string> =>
	SetMetadata(ROLES_KEY, roles);
