'use client';

import { Button, Typography } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';

import { useGetMe } from '@/entities/session/model/queries/useGetMe';
import { useLogout } from '@/entities/session/model/queries/useLogout';
import { useLogin } from '@/entities/session/model/queries/useLogin';
import { useUpdateMe } from '@/entities/session/model/queries/useUpdateMe';
import { faker } from '@faker-js/faker';
import { useRegister } from '@/entities/session/model/queries/useRegister';

export default function Home() {
  const width = useGetScreenWidth();
  const { data } = useGetMe();
  const { mutate: logout } = useLogout();
  const { mutate: login } = useLogin();
  const { mutate: update } = useUpdateMe();
  const { mutate: register, isPending } = useRegister();

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <Typography>Hello, {data?.email || 'failed to fetch'}!</Typography>

      <Button onClick={() => logout()}>Logout</Button>
      <Button onClick={() => login({ email: 'john.doe@example.com', password: 'secret' })}>
        Login
      </Button>
      <Button onClick={() => update({ fullName: faker.internet.userName() })}>Update</Button>
      <Button
        onClick={() => register({ email: faker.internet.email(), password: 'secret' })}
        loading={isPending}
      >
        Register
      </Button>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>
    </>
  );
}
