import React from 'react';
import api from "../../http";
import {useQuery} from "react-query";

export const useGetUsers = (page) => {
    const getUsers = async () => {
          return  await api.get('/users', { params: { page } })
    }

    return useQuery("getUsers", getUsers, {
        onError: (error) => {
            console.log({error})
        }
    })
};

