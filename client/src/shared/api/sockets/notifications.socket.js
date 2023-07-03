import { io } from 'socket.io-client'

import { LOCAL_PATH } from '../../../shared/api/axios'

export const socket = io(LOCAL_PATH, {
  autoConnect: false,
})
