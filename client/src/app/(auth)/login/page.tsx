'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, InputPassword, Typography } from '@/shared/ui';

import { useState } from 'react';
import styles from '../shared.module.scss';
import { Github, Google, Login } from '@/shared/assets';

interface LoginProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  const onSubmit: SubmitHandler<LoginProps> = data => console.log(data);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.left}>
        <div className={styles.interactive_container}>
          <div className={styles.flex_wrapper}>
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
                  minLength: { value: 8, message: 'Minimum length is 8!' },
                })}
                error={errors?.password ? errors.password.message : undefined}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className={styles.forgot_link_wrapper}>
                <div
                  className={styles.forgot_link}
                  onClick={() => router.push('/password/recover')}
                >
                  <Typography size='body_s' color='greenBright'>
                    Forgot Password?
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex_wrapper__s}>
            <Button type='submit'>Log in</Button>
            <div className={styles.lines_container}>
              <div className={styles.line} />
              <Typography size='body_m' color='greyNormal'>
                or log in with
              </Typography>
              <div className={styles.line} />
            </div>

            <div className={styles.buttons_container}>
              <button className={styles.button} onClick={() => login()} type='button'>
                <Google />
              </button>
              <button className={styles.button} type='button'>
                <Github />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.svg_container}>
          <Login />
        </div>
      </div>
    </form>
  );
}
