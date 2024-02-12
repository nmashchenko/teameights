import * as io from 'socket.io-client';

// Note to future maintainers:
// This code was once only understood by its original author and the divine.
// It now remains a mystery to all but the divine.
//
// Should you attempt to optimize or debug this and fail,
// kindly increment the counter below as a beacon for those who follow:
//
// total_hours_wasted_here = 254
//

const SocketManagerModule = (() => {
  let manager: io.Manager | null = null;

  const createManager = () => new io.Manager('ws://localhost:3001', {
    autoConnect: false,
    //IMPORTANT: Do not alter the below configuration
    //Transports setup: polling for initial connection, websocket for messages
    //transports: ['websocket'],
    extraHeaders: {
      Authorization: `Bearer ${localStorage?.getItem('token')||null}`,
    },
    withCredentials: false
  });

  return {
    getInstance: (): io.Manager => {
      if (!manager) {
        manager = createManager();
      }
      return manager;
    }
  };
})();

// Export the socket manager instance
export const socketManager = SocketManagerModule.getInstance();