import { Session } from 'src/modules/session/entities/session.entity';

export type JwtRefreshPayloadType = {
  sessionId: Session['id'];
  iat: number;
  exp: number;
};
