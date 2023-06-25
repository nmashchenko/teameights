import { io } from 'socket.io-client'

import { LOCAL_PATH } from '../../http'

export const socket = io(LOCAL_PATH, {
  autoConnect: false,
})
