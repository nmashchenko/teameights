import React from 'react';
import {useQuery} from "react-query";
import api from "../../http";
import {userAuth} from "../../store/reducers/UserAuth";
import {useDispatch} from "react-redux";

export const useCheckAuth = () => {
    const dispatch = useDispatch()
    const checkAuth = async () => {
           return await api.get(`/get-user-object`)
    };

    return useQuery("checkAuth", checkAuth, {
        onSuccess: () => {
            dispatch(userAuth.actions.authUserSuccess())
        },
        onError: (error) => {
            dispatch(userAuth.actions.authUserError(error.response?.data?.message))
        },
        refetchOnMount: false,
        enabled: !!localStorage.getItem('token')
    })
};

