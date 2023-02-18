import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import http from '../../../http'
import {
    registrationAuth,
} from '../../../store/reducers/RegistrationAuth'

const { api } = http

export const useUpdateUserAvatar = () => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const updateUserAvatar = async (userData) => {
        console.log({userData})
        return await api.post('/users/update-avatar', userData)
    }

    return useMutation(updateUserAvatar, {
        mutationKey: 'updateUserAvatar',
        onSuccess: () => {
            queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
        },
        onError: (error) => {
            // set error message
            dispatch(registrationAuth.actions.finishRegistrationError(error.response?.data?.message))
        },
    })
}
