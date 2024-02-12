import { io, Socket } from 'socket.io-client';

export class SocketSingleton {
  private static instance: Socket | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(namespace: string): Socket {
    if (!this.instance) {
      // Create a new socket instance if it doesn't exist
      this.instance = io(`ws://localhost:3001/${namespace}`, {
        autoConnect: false,
      });
    }
    return this.instance;
  }
}

export const socket = SocketSingleton.getInstance('notifications');
