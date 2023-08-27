'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { Github } from 'shared/assets/Icons/Socials/Github';
import { Google } from 'shared/assets/Icons/Socials/Google';
import { Login } from 'shared/assets/Illustrations/Login';
import { Colors } from 'shared/constant/colors';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Fields/Input/Input';
import { InputPassword } from 'shared/ui/Fields/Input/InputPassword';
import { Typography, TypographySize } from 'shared/ui/Typography/Typography';
import styles from '../Auth.module.scss';

export default function LoginPage() {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code'
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.interactive_container}>
          <div className={styles.flex_wrapper}>
            <Input
              name='email'
              placeholder='Email'
              type='email'
              value={email}
              onChange={onEmailChange}
            />
            <div>
              <InputPassword
                name='password'
                placeholder='Password'
                value={password}
                onChange={onPasswordChange}
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
            <Button>Log in</Button>
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
    </div>
  );
}
