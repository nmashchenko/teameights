import React from 'react';
import api from "../../http";
import {useQuery} from "react-query";
import {userAuth} from "../../store/reducers/UserAuth";
import {useDispatch} from "react-redux";
import {
    finishRegistrationError,
    setActiveState,
    setStageOneCompleted,
    setStep
} from "../../store/reducers/RegistrationAuth";

export const useValidateUsername = () => {
    const dispatch = useDispatch()
    const validateUsername = async (validationDetails) => {
           return await api.get('/check-username', { params: validationDetails })
    }

    return useQuery("validateUsername", validateUsername, {
        onSuccess: () => {
            dispatch(setActiveState('UserConcentration'))
            dispatch(setStep(2))
            dispatch(setStageOneCompleted(true))
        },
        onError: (error) => {
            dispatch(finishRegistrationError(error.response?.data?.message))
        },
        enabled: false
    })
};

