'use client';

import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useGoogleLogin } from '@react-oauth/google';
import { Github, Google, Login } from 'shared/assets';
import { Colors } from 'shared/constant';
import { Button, Input, InputPassword, Typography, TypographySize } from 'shared/ui';

import styles from '../shared.module.scss';

interface SignupProperties {
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: codeResponse => console.log(codeResponse),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignupProperties>();

  const onSubmit: SubmitHandler<SignupProperties> = data => console.log(data);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.left}>
        <div className={styles.interactive_container}>
          <div className={styles.flex_wrapper}>
            <Input
              placeholder='Email'
              {...register('email', { required: 'You must specify an email' })}
              type='email'
              error={errors?.email ? errors.email.message : undefined}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputPassword
              placeholder='Password'
              {...register('password', {
                minLength: { message: 'Password must have at least 8 characters', value: 8 },
                required: 'You must specify a password',
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
          </div>
          <div className={styles.flex_wrapper__s}>
            <Button>Sign Up</Button>
            <div className={styles.lines_container}>
              <div className={styles.line} />
              <Typography size={TypographySize.Body_L} color={Colors.GreyNormal}>
                or continue with
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
