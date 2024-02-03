import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { inspect } from 'util';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';

export interface AuthSocket extends Socket {
  user: User;
}

export type SocketMiddleware = (socket: Socket, next: (err?: Error) => void) => void;
export const WSAuthMiddleware = (
  jwtService: JwtService,
  userService: UsersService,
  configService: ConfigService<AllConfigType>
): SocketMiddleware => {
  return async (socket: AuthSocket, next) => {
    try {
      const token = socket.handshake.headers.authorization?.slice(7);
      const jwtPayload = await jwtService.verify(token ?? '', {
        secret: configService.get('auth.secret', { infer: true }),
      });
      const userResult = await userService.findOne({ id: jwtPayload.id });
      if (userResult) {
        socket.user = userResult;
        next();
      } else {
        next({
          name: 'Unauthorizaed',
          message: 'Unauthorizaed',
        });
      }
    } catch (error) {
      console.log(inspect(error));
      next({
        name: 'Unauthorizaed',
        message: 'Unauthorizaed',
      });
    }
  };
};
