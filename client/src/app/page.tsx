'use client';

import { Button, SearchBar, Typography } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';

import { useGetMe, useLogout, useLogin, useUpdateMe, useRegister } from '@/entities/session';
import { faker } from '@faker-js/faker';

export default function Home() {
  const width = useGetScreenWidth();
  const { data, isFetching } = useGetMe();
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

      <Typography>
        Hello, {isFetching ? 'loading...' : data?.email ?? 'Failed to fetch'}!
      </Typography>

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

      <SearchBar
        initialFiltersState={[
          {
            type: 'text',
            label: 'Name',
            value: 'name',
            placeholder: 'Search by name',
            filterValue: '',
          },
        ]}
        onChange={() => console.log(1)}
      />
    </>
  );
}
