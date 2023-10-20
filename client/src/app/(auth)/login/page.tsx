'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Flex, Input, InputPassword, Typography } from '@/shared/ui';

import { useState } from 'react';
import styles from '../shared.module.scss';
import { Github, Google } from '@/shared/assets';
import { useLogin } from '@/entities/session/model/queries/useLogin';

interface LoginProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const { mutate: loginUser } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  const onSubmit: SubmitHandler<LoginProps> = () => loginUser({ email, password });

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

          <div>
            <InputPassword
              placeholder='Password'
              {...register('password', {
                required: 'Password is required!',
                // minLength: { value: 8, message: 'Minimum length is 8!' },
              })}
              error={errors?.password ? errors.password.message : undefined}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Flex margin='8px 0 0 0' justify='flex-end'>
              <div className={styles.forgot_link} onClick={() => router.push('/password/recover')}>
                <Typography size='body_s' color='greenBright'>
                  Forgot Password?
                </Typography>
              </div>
            </Flex>
          </div>
        </Flex>

        <Flex direction='column' gap={24}>
          <Button type='submit'>Log in</Button>

          <Flex justify='center' align='center' gap={13} className={styles.lines_container}>
            <div className={styles.line} />
            <Typography size='body_m' color='greyNormal'>
              or log in with
            </Typography>
            <div className={styles.line} />
          </Flex>

          <Flex gap={8} justify='center' align='center'>
            <Button typeBtn='secondary' size='l' width='100%' type='button' onClick={() => login()}>
              <Google />
              <Typography>Google</Typography>
            </Button>
            <Button typeBtn='secondary' size='l' width='100%' type='button'>
              <Github />
              <Typography>Github</Typography>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}
