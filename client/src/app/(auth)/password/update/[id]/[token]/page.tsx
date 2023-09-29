'use client';
import styles from '../../../shared.module.scss';
import { Button, InputPassword, Typography } from '@/shared/ui';
import clsx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface UpdateProps {
  password: string;
  repeatPassword: string;
}
export default function Update({ params }: { params: { id: string; token: string } }) {
  const { id, token } = params;
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProps>();

  const onSubmit: SubmitHandler<UpdateProps> = data => {
    console.log(data, id, token);
  };

  return (
    <form
      className={clsx(styles.info, {
        [styles.width370px]: true,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={clsx(styles.gap_container, {
          [styles.gap8px]: true,
          [styles.align_text]: true,
        })}
      >
        <Typography color='greenBright' size='heading_m'>
          Recover Password
        </Typography>
        <Typography size='body_m'>
          Enter a new password and confirm it by re-entering it in the appropriate fields
        </Typography>
      </div>
      <div
        className={clsx(styles.gap_container, {
          [styles.gap36px]: true,
        })}
      >
        <InputPassword
          placeholder='Password'
          {...register('password', {
            required: 'You must specify a password',
            minLength: { value: 8, message: 'Password must have at least 8 characters' },
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
      <Button width='100%'>Reset password</Button>
    </form>
  );
}
