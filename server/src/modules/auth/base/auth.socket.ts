import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { inspect } from 'util';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';
import { HttpException, HttpStatus } from '@nestjs/common';

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
    const unauthorizedException = new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        errors: { message: `Unauthorizaed` },
      },
      HttpStatus.UNAUTHORIZED
    );

    try {
      const token = socket.handshake.headers.authorization?.slice(7);
      const jwtPayload = await jwtService.verify(token ?? '', {
        secret: configService.get('auth.secret', { infer: true }),
      });
      const user = await userService.findOne({ id: jwtPayload.id });
      if (user) {
        socket.user = user;
        next();
      } else throw {};
    } catch (e) {
      next({
        name: 'Unauthorizaed',
        message: JSON.stringify(unauthorizedException),
      } as Error);
    }
  };
};
