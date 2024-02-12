//mini-app for testing socket.io via client

import { inspect } from 'util';

const target_host = 'http://localhost:3001';
const namespace = 'chat';

const socket = new WebSocket(`${target_host}/${namespace}`);

socket.onopen = function () {
  console.log('Соединение установлено');
};

socket.onmessage = function (event) {
  console.log(`Получено сообщение: ${event.data}`);
};

socket.onclose = function (event) {
  console.log('Соединение закрыто');
};

socket.onerror = function (error) {
  console.log(`Ошибка: ${inspect(error)}`);
};
