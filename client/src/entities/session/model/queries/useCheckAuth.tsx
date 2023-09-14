import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
    // onSuccess: data => {
    //   // if (data && data.isRegistered) {
    //   //   dispatch(userAuth.actions.authUserSuccess());
    //   //   dispatch(userAuth.actions.setUserNotifications(data?.notifications));
    //   //   dispatch(userAuth.actions.setUserId(data?._id));
    //   // }
    // },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!localStorage.getItem('token'),
  });
};
