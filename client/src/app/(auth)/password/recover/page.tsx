'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ArrowLeft } from 'shared/assets/Icons/Arrows/ArrowLeft';
import { Colors } from 'shared/constant/colors';
import { Button, Input, Typography, TypographySize } from 'shared/ui';
import styles from './styles.module.scss';

interface RecoverProps {
  email: string;
}

export default function Recover() {
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RecoverProps>();

  const onSubmit: SubmitHandler<RecoverProps> = (data) => console.log(data);

  return (
    <form className={styles.info} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.gapContainer}>
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className={styles.gapContainer}>
        <Button width='100%' disabled={email.length ? false : true}>
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
