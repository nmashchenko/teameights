import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { TokensService } from '@/tokens/tokens.service';

import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(
		private tokensService: TokensService,
		private reflector: Reflector,
	) {}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		try {
			const requiredRoles = this.reflector.getAllAndOverride<string[]>(
				ROLES_KEY,
				[context.getHandler(), context.getClass()],
			);

			if (!requiredRoles) {
				return true;
			}

			const req = context.switchToHttp().getRequest();
			const authHeader = req.headers.authorization;
			const bearer = authHeader.split(' ')[0];
			const token = authHeader.split(' ')[1];

			if (bearer !== 'Bearer' || !token) {
				throw new UnauthorizedException({
					message: 'User is not authorized.',
				});
			}

			const user = this.tokensService.validateToken(
				token,
				process.env.JWT_ACCESS_KEY,
			);
			if (!user) {
				throw new UnauthorizedException({
					message: 'User is not authorized.',
				});
			}
			req.user = user;

			const check = user.roles.some((role) =>
				requiredRoles.includes(role.value),
			);

			if (!check) {
				throw new HttpException(
					'User role has no access to the endpoint.',
					HttpStatus.FORBIDDEN,
				);
			}

			return check;
		} catch (err) {
			console.log(err);
			throw new HttpException(
				'User role has no access to the endpoint.',
				HttpStatus.FORBIDDEN,
			);
		}
	}
}
