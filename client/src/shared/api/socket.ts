import { io, Socket } from 'socket.io-client';

class SocketSingleton {
  private static instance: Socket | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): Socket {
    if (!SocketSingleton.instance) {
      // Create a new socket instance if it doesn't exist
      SocketSingleton.instance = io('ws://localhost:3001');
    }
    return SocketSingleton.instance;
  }
}

export const socket = SocketSingleton.getInstance();
