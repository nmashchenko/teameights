'use client';

import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { Github, Google, Login } from 'shared/assets';
import { Colors } from 'shared/constant';
import { Button, Input, InputPassword, Typography, TypographySize } from 'shared/ui';

import styles from '../shared.module.scss';

interface LoginProperties {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginProperties>();

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: codeResponse => console.log(codeResponse),
  });

  const onSubmit: SubmitHandler<LoginProperties> = data => console.log(data);

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
                  minLength: { message: 'Minimum length is 8!', value: 8 },
                  required: 'Password is required!',
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
