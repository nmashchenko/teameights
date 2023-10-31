'use client';
import styles from '../password.module.scss';
import { Button, Flex, InputPassword, Typography } from '@/shared/ui';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useResetPassword } from '@/entities/session/model/queries/useResetPassword';

interface UpdateProps {
  password: string;
  repeatPassword: string;
}
export default function Update() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') ?? ''; // default value is ""
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { mutate: resetPassword, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProps>();

  const onSubmit: SubmitHandler<UpdateProps> = data =>
    resetPassword({ password: data.password, hash });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction='column'
        justify='center'
        align='center'
        gap={48}
        className={styles.width_limiter}
      >
        <Flex
          direction='column'
          justify='center'
          align='center'
          gap={8}
          className={styles.text_align}
        >
          <Typography color='greenBright' size='heading_m'>
            Recover Password
          </Typography>
          <Typography size='body_m'>
            Enter a new password and confirm it by re-entering it in the appropriate fields
          </Typography>
        </Flex>
        <Flex direction='column' justify='center' align='center' gap={36} width='100%'>
          <InputPassword
            placeholder='Password'
            {...register('password', {
              required: 'You must specify a password',
              // minLength: { value: 8, message: 'Password must have at least 8 characters' },
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
        <Button width='100%' loading={isPending}>
          Reset password
        </Button>
      </Flex>
    </form>
  );
}
