'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { Github, Google } from '@/shared/assets';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Flex, Input, InputPassword, Typography } from '@/shared/ui';
import styles from '../shared.module.scss';
import { useRouter } from 'next/navigation';
import { useRegister } from '@/entities/session/model/queries/useRegister';

interface SignupProps {
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const router = useRouter();
  const { mutate: registerUser } = useRegister();

  const login = useGoogleLogin({
    onSuccess: codeResponse => router.push(`/proxy/google?code=${codeResponse.code}`),
    flow: 'auth-code',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const loginWithGit = () =>
    router.push(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_API_OAUTH_TOKEN}`
    );

  const onSubmit: SubmitHandler<SignupProps> = data =>
    registerUser({ email: data.email, password: data.password });

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={48} direction='column' width='100%' className={styles.width_limiter}>
        <Flex direction='column' gap={36}>
          <Input
            placeholder='Email'
            {...register('email', { required: 'Email is required!' })}
            type='email'
            error={errors?.email ? errors.email.message : undefined}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <InputPassword
            placeholder='Password'
            {...register('password', {
              required: 'Password is required!',
              minLength: { value: 8, message: 'Minimum length is 8!' },
            })}
            error={errors?.password ? errors.password.message : undefined}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <InputPassword
            placeholder='Confirm Password'
            {...register('repeatPassword', {
              validate: value => value === password || 'The passwords do not match',
            })}
            error={errors?.repeatPassword ? errors.repeatPassword.message : undefined}
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </Flex>

        <Flex direction='column' gap={24}>
          <Button type='submit'>Sign up</Button>

          <Flex justify='center' align='center' gap={13} className={styles.lines_container}>
            <div className={styles.line} />
            <Typography size='body_m' color='greyNormal'>
              or continue with
            </Typography>
            <div className={styles.line} />
          </Flex>

          <Flex gap={8} justify='center' align='center'>
            <Button typeBtn='secondary' size='l' width='100%' type='button' onClick={() => login()}>
              <Google />
              <Typography>Google</Typography>
            </Button>
            <Button typeBtn='secondary' size='l' width='100%' type='button' onClick={loginWithGit}>
              <Github />
              <Typography>Github</Typography>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}
