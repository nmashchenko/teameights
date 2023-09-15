import { io } from 'socket.io-client';
import { LOCAL_PATH } from '../config';

export const socket = io(LOCAL_PATH, {
  autoConnect: false,
});
