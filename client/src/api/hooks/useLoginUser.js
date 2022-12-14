import React, {useId} from 'react';
import {useMutation, useQueryClient} from "react-query";
import api from "../../http";
import {userAuth} from "../../store/reducers/UserAuth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const useLoginUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const id = useId();


    const loginUser = async (loginDetails) => {
        return await api.post('/login', loginDetails)
    };

    const mutation =  useMutation(loginUser, {
        mutationKey: ["logInUser", id],
        onMutate: () => {
            // clear previous error before making new request
            dispatch(userAuth.actions.authClearError())
        },
        onSuccess: (data) => {
            // save accessToken
            localStorage.setItem('token', data.data.accessToken)
            dispatch(userAuth.actions.authUserSuccess())
            navigate("/", {replace: true})
            queryClient.invalidateQueries("checkAuth", { refetchInactive: true, })
        },
        onError: (error) => {
            // set error message
            dispatch(userAuth.actions.authUserError(error.response?.data?.message))
        }
    })

    return mutation
};

