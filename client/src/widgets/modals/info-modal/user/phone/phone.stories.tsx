import type { Meta } from '@storybook/react';
import { UserPhone } from './phone';
import { useEffect, useState } from 'react';
import { Button, Flex } from '@/shared/ui';
import { generateMockUser } from '@/shared/lib/mock';
import { IUserBase } from '@teameights/types';

const meta: Meta<typeof UserPhone> = {
  title: 'widgets/modals/info/user/phone',
  component: UserPhone,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const InfoModalUser_desktop = () => {
  const [modal, setModal] = useState(false);

  const [user, setUser] = useState<IUserBase>();

  useEffect(() => {
    setUser(generateMockUser());
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Flex gap={8}>
        <Button typeBtn='primary' size='m' color='white' onClick={() => setModal(true)}>
          Open Modal
        </Button>
      </Flex>
      <UserPhone user={user} isOpenModal={modal} handleClose={() => setModal(false)} />
    </div>
  );
};
