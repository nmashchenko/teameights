import {useMutation, useQueryClient} from 'react-query'

import http from '../../../http'
import {useNavigate} from "react-router-dom";

const { api } = http

export const useCreateTeam = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const createTeam= async (details) => {
        const response = await api.post('/teams/create', details)

        return response.data
    }

    return useMutation(createTeam, {
        mutationKey: 'createTeam',
        onSuccess: () => {
            queryClient.invalidateQueries('checkAuth', { refetchInactive: true })
            navigate('/myteam')
        },
    })
}
