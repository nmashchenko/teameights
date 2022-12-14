import React, {useId} from 'react';
import {userAuth} from "../../store/reducers/UserAuth";
import api from "../../http";
import {useMutation, useQueryClient} from "react-query";
import {useDispatch} from "react-redux";

export const useLogoutUser = () => {
    const id = useId();
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const logoutUser = async () => {
          return  await api.post('/logout')
    }

    const mutation =  useMutation(logoutUser, {
        mutationKey: ["logoutUser", id],
        onSuccess: (data) => {
            // remove accessToken && set isAuth to false
            localStorage.removeItem('token')
            dispatch(userAuth.actions.authUserLogout())

            // remove user data
            queryClient.setQueryData("checkAuth", (oldQueryData) => {
            return {
                ...oldQueryData,
                data: null
            }
        })
        },
        onError: (error) => {
            // set error message
            dispatch(userAuth.actions.authUserError(error.response?.data?.message))
        }
    })

    return mutation
};

