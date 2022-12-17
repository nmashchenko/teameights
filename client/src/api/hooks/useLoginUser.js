import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import api from "../../http";
import {userAuth} from "../../store/reducers/UserAuth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../constants/routes";

export const useLoginUser = (type) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const queryClient = useQueryClient()


    const loginUser = async (loginDetails) => {
        return await api.post(`/${type}`, loginDetails)
    };

    return  useMutation(loginUser, {
        mutationKey: type,
        onMutate: () => {
            // clear previous error before making new request
            dispatch(userAuth.actions.authClearError())
        },
        onSuccess: (data) => {
            const user = data?.data.user
            //check if user finished full registration
            if(user.isRegistered){
                // save accessToken
                dispatch(userAuth.actions.authUserSuccess())
                navigate("/", {replace: true})
            } else{
                // navigate user to finish registration
                navigate(ROUTES.finishRegistration)
            }
            localStorage.setItem('token', data.data.accessToken)
            queryClient.invalidateQueries("checkAuth", { refetchInactive: true, })
        },
        onError: (error) => {
            // set error message
            dispatch(userAuth.actions.authUserError(error.response?.data?.message))
        }
    })
};

