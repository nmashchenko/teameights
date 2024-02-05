import { Catch, HttpException, ArgumentsHost, Logger } from '@nestjs/common';
import { WsException, BaseWsExceptionFilter } from '@nestjs/websockets';
import { AuthSocket } from 'src/modules/auth/base/auth.socket';
import { BasicSocketEvents } from './types/socket.type';
import { inspect } from 'util';

@Catch(WsException, HttpException)
export class WebsocketExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: WsException | HttpException, host: ArgumentsHost) {
    const client = host.switchToWs().getClient() as AuthSocket;
    const error = exception instanceof WsException ? exception.getError() : exception.getResponse();
    const details = error instanceof Object ? { ...error } : { message: error };
    const e = JSON.stringify(details);
    Logger.log(
      `\n{\nEvent: ${BasicSocketEvents.ERRORS}\nClients: [${inspect(client.id)}]\nEntity: ${
        WebsocketExceptionsFilter.name
      } ${inspect(details)}\n}`,
      WebsocketExceptionsFilter.name
    );
    client.emit(BasicSocketEvents.ERRORS, e);
  }
}
