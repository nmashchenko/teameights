'use client';

import { useQuery } from '@tanstack/react-query';
import { http } from 'shared/api';
import { IUserResponse } from '../types';
import { AxiosResponse } from 'axios';

const { api } = http;

export const useCheckAuth = () => {
  const checkAuth = async (): Promise<AxiosResponse<IUserResponse>> => {
    const response = await api.get(`/users/get-by-token`);
    return response.data;
  };

  return useQuery<AxiosResponse<IUserResponse>>(['checkAuth'], checkAuth, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!localStorage.getItem('token'),
  });
};
