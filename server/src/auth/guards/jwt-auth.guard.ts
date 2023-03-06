import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokensService } from '@Tokens/tokens.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private tokensService: TokensService) {}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const req = context.switchToHttp().getRequest();
		try {
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
			return true;
		} catch (err) {
			throw new UnauthorizedException({
				message: 'User is not authorized.',
			});
		}
	}
}
