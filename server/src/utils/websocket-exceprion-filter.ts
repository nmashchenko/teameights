import { Catch, HttpException, ArgumentsHost, Logger } from '@nestjs/common';
import { WsException, BaseWsExceptionFilter } from '@nestjs/websockets';
import { AuthSocket } from 'src/modules/auth/base/auth.socket';
import { BasicSocketEvents } from './types/socket.type';

@Catch()
export class WebsocketAllExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const client = host.switchToWs().getClient() as AuthSocket;
    client.emit(BasicSocketEvents.ERRORS, exception);
    super.catch(exception, host);
  }
}
