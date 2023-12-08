import axios from 'axios';
import { IRefreshResponse } from '@teameights/types';
import Cookies from 'js-cookie';

// * API url is set based on current DEV_TYPE var
const LOCAL_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://teameights-server.herokuapp.com';

export const API_URL = LOCAL_PATH + '/api/v1';

export const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

API.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<IRefreshResponse>(
          `${API_URL}/auth/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('refreshToken')}`,
            },
          }
        );
        localStorage.setItem('token', response.data.token);
        Cookies.set('refreshToken', response.data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
        return API.request(originalRequest);
      } catch (err) {
        // TODO: Rewrite to logger
        console.log('Not authorized');
        localStorage.removeItem('token');
        Cookies.remove('refreshToken');
      }
    }
    throw error;
  }
);
