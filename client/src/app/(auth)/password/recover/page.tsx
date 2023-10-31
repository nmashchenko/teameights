'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ArrowLeft } from '@/shared/assets';
import { Button, Flex, Input, Typography } from '@/shared/ui';
import styles from '../password.module.scss';
import { useForgotPassword } from '@/entities/session/model/queries/useForgotPassword';

interface RecoverProps {
  email: string;
}

export default function Recover() {
  const [email, setEmail] = useState('');
  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverProps>();

  const onSubmit: SubmitHandler<RecoverProps> = data => forgotPassword(data);

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
            Enter the email you used to register and we will send you link to reset your password
          </Typography>
        </Flex>
        <Input
          placeholder='Email'
          {...register('email', { required: 'Email is required!' })}
          type='email'
          error={errors?.email ? errors.email.message : undefined}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Flex direction='column' justify='center' align='center' gap={8} width='100%'>
          <Button width='100%' disabled={!email.length} loading={isPending}>
            Reset password
          </Button>
          <Button width='100%' typeBtn='secondary' type='button'>
            <ArrowLeft />
            <Link href='/login'>Back to Log in</Link>
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}
