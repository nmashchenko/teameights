'use client';

import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'shared/assets';
import { Colors } from 'shared/constant';
import { Button, Input, Typography, TypographySize } from 'shared/ui';

import styles from '../shared.module.scss';

interface RecoverProperties {
  email: string;
}

export default function Recover() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RecoverProperties>();

  const onSubmit: SubmitHandler<RecoverProperties> = data => {
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
        className={clsx(styles.gapContainer, {
          [styles.alignText]: true,
          [styles.gap8px]: true,
        })}
      >
        <Typography color={Colors.GreenBright} size={TypographySize.Heading_M}>
          Recover Password
        </Typography>
        <Typography size={TypographySize.Body_L}>
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
        className={clsx(styles.gapContainer, {
          [styles.gap8px]: true,
        })}
      >
        <Button width='100%' disabled={email.length === 0}>
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
