import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export type AuthSocket = Socket & {
  handshake: {
    user: User;
  };
};

@Injectable()
export class WebSocketJwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  getRequest(context: ExecutionContext) {
    return context.switchToWs().getClient().handshake;
  }
}

@Injectable()
export class WebSocketJwtAuthMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService
  ) {}
  public readonly apply = async (socket: AuthSocket, next) => {
    try {
      const token = socket.handshake.headers.authorization?.slice(7);
      const jwtPayload = await this.jwtService.verify(token ?? '', {
        secret: this.configService.get('auth.secret', { infer: true }),
      });
      const user = await this.userService.findOne({ id: jwtPayload.id });
      if (user) {
        socket.handshake.user = user;
        next();
      } else throw false;
    } catch (e) {
      next(new UnauthorizedException());
    }
  };
}
