import type { Meta } from '@storybook/react';
import { UserDesktop } from './desktop';
import { Button, Flex } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { IUserBase } from '@teameights/types';
import { generateMockUser } from '@/shared/lib';

const meta: Meta<typeof UserDesktop> = {
  title: 'widgets/modals/info/user/desktop',
  component: UserDesktop,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const InfoModalUser_desktop = () => {
  const [openModal, setOpenModal] = useState(false);

  const [user, setUser] = useState<IUserBase>();

  useEffect(() => {
    setUser(generateMockUser());
  }, []);

  return (
    <div>
      <Flex gap={8}>
        <Button typeBtn='primary' size='m' color='white' onClick={() => setOpenModal(true)}>
          Open Modal
        </Button>
      </Flex>
      <UserDesktop user={user} isOpenModal={openModal} handleClose={() => setOpenModal(false)} />
    </div>
  );
};
