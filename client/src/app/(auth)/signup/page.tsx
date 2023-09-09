'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { Github } from 'shared/assets/Icons/Socials/Github';
import { Google } from 'shared/assets/Icons/Socials/Google';
import { Login } from 'shared/assets/Illustrations/Login';
import { Colors } from 'shared/constant/colors';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, InputPassword, Typography, TypographySize } from 'shared/ui';
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
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code'
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupProps>();

  const onSubmit: SubmitHandler<SignupProps> = (data) => console.log(data);

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
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPassword
              placeholder='Password'
              {...register('password', {
                required: 'You must specify a password',
                minLength: { value: 8, message: 'Password must have at least 8 characters' }
              })}
              error={errors?.password ? errors.password.message : undefined}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputPassword
              placeholder='Confirm Password'
              {...register('repeatPassword', {
                validate: (value) => value === password || 'The passwords do not match'
              })}
              error={errors?.repeatPassword ? errors.repeatPassword.message : undefined}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
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
