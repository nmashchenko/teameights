'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { Github, Google, LogoBig } from '@/shared/assets';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Flex, Input, InputPassword, Typography } from '@/shared/ui';
import styles from '../shared.module.scss';

interface SignupProps {
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit: SubmitHandler<SignupProps> = data => console.log(data);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={48} direction='column' maxWidth='370px' width='100%'>
        <Flex className={styles.additional_logo} width='100%' justify='center' align='center'>
          <LogoBig />
        </Flex>
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
          <Button type='submit'>Log in</Button>

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
