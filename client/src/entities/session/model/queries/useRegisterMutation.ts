// import { AxiosResponse } from 'axios';
// import { useRouter } from 'next/router';
// import { http } from 'shared/api';

// import { useMutation } from '@tanstack/react-query';
// import { toast } from 'react-hot-toast';
// import { ROUTES } from 'shared/api/routes';
// import { AuthRequestBody, AuthResponseDTO } from '../types';

// const { api } = http;

// export const useRegister = () => {
//   const router = useRouter();
//   const registerUser = async (registrationDetails: AuthRequestBody) => {
//     return await api.post('/auth/registration', registrationDetails);
//   };

//   // return useMutation<AuthResponseDTO, Error>(registerUser, {
//     mutationKey: 'registerUser',
//     onMutate: () => {
//       // clear previous error before making new request
//       // dispatch(userAuth.actions.authClearError());
//     },
//     onSuccess: (data: AxiosResponse<AuthResponseDTO>) => {
//       // save accessToken
//       localStorage.setItem('token', data.data.accessToken);
//       router.push(ROUTES.confirmEmail);
//     },
//     onError: (error: Error) => {
//       // set error message
//       toast(error.message);
//     }
//   });
// };
