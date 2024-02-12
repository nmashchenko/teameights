import { Session } from 'src/modules/session/entities/session.entity';
import { User } from 'src/modules/users/entities/user.entity';

export type JwtPayloadType = Pick<User, 'id' | 'role'> & {
  sessionId: Session['id'];
  iat: number;
  exp: number;
};
