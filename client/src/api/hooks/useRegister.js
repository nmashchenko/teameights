import React from 'react';
import {userAuth} from "../../store/reducers/UserAuth";
import api from "../../http";
import ROUTES from "../../constants/routes";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";

export const useRegister = (registrationDetails) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const registerUser = async () => {
            return await api.post('/registration', registrationDetails)
    }

    return  useMutation(registerUser, {
        mutationKey: "registerUser",
        onMutate: () => {
            // clear previous error before making new request
            dispatch(userAuth.actions.authClearError())
        },
        onSuccess: (data) => {
            // save accessToken
            localStorage.setItem('token', data.data.accessToken)
            dispatch(userAuth.actions.authUserSuccess())
            navigate(ROUTES.confirmEmail)
        },
        onError: (error) => {
            // set error message
            dispatch(userAuth.actions.authUserError(error.response?.data?.message))
        }
    })

};

