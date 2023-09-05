'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Github } from 'shared/assets/Icons/Socials/Github';
import { Google } from 'shared/assets/Icons/Socials/Google';
import { Login } from 'shared/assets/Illustrations/Login';
import { Colors } from 'shared/constant/colors';

import { Button, Input, InputPassword, Typography, TypographySize } from 'shared/ui';

import { useState } from 'react';
import styles from '../Auth.module.scss';

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
    formState: { errors }
  } = useForm<LoginProps>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code'
  });

  const onSubmit: SubmitHandler<LoginProps> = (data) => console.log(data);

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
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <InputPassword
                placeholder='Password'
                {...register('password', {
                  required: 'Password is required!',
                  minLength: { value: 8, message: 'Minimum length is 8!' }
                })}
                error={errors?.password ? errors.password.message : undefined}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.forgot_link_wrapper}>
                <div className={styles.forgot_link} onClick={() => router.push('/forgot-password')}>
                  <Typography size={TypographySize.Body_M} color={Colors.GreenBright}>
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
              <Typography size={TypographySize.Body_L} color={Colors.GreyNormal}>
                or log in with
              </Typography>
              <div className={styles.line} />
            </div>

            <div className={styles.buttons_container}>
              <button className={styles.button} onClick={() => login()}>
                <Google />
              </button>
              <button className={styles.button}>
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
