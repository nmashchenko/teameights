'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ArrowLeft } from '@/shared/assets';
import { Button, Input, Typography } from '@/shared/ui';
import styles from '../shared.module.scss';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface RecoverProps {
  email: string;
}

export default function Recover() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverProps>();

  const onSubmit: SubmitHandler<RecoverProps> = data => {
    console.log(data);
    router.push('confirmation');
  };

  return (
    <form
      className={clsx(styles.info, {
        [styles.width470px]: true,
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
          Enter the email you used to register and we will send you link to reset your password
        </Typography>
      </div>
      <Input
        placeholder='Email'
        {...register('email', { required: 'Email is required!' })}
        type='email'
        error={errors?.email ? errors.email.message : undefined}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div
        className={clsx(styles.gap_container, {
          [styles.gap8px]: true,
        })}
      >
        <Button width='100%' disabled={!email.length}>
          Reset password
        </Button>
        <Button width='100%' typeBtn='secondary'>
          <ArrowLeft />
          <Link href='/login'>Back to Log in</Link>
        </Button>
      </div>
    </form>
  );
}
