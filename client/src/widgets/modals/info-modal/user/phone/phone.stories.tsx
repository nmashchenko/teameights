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
  const [openDesigner, setOpenDesigner] = useState(false);
  const [openDev, setOpenDev] = useState(false);
  const [openPM, setOpenPM] = useState(false);

  const [designer, setDesigner] = useState<IUserBase>();
  const [developer, setDeveloper] = useState<IUserBase>();
  const [pm, setPM] = useState<IUserBase>();

  useEffect(() => {
    setDesigner(generateMockUser('designer'));
    setDeveloper(generateMockUser());
    setPM(generateMockUser('pm'));
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Flex gap={8}>
        <Button typeBtn='primary' size='m' color='white' onClick={() => setOpenDev(true)}>
          Open Developer Modal
        </Button>
        <Button typeBtn='primary' size='m' color='white' onClick={() => setOpenDesigner(true)}>
          Open Designer Modal
        </Button>
        <Button typeBtn='primary' size='m' color='white' onClick={() => setOpenPM(true)}>
          Open PM Modal
        </Button>
      </Flex>
      <UserPhone user={developer} isOpenModal={openDev} handleClose={() => setOpenDev(false)} />
      <UserPhone
        user={designer}
        isOpenModal={openDesigner}
        handleClose={() => setOpenDesigner(false)}
      />
      <UserPhone user={pm} isOpenModal={openPM} handleClose={() => setOpenPM(false)} />
    </div>
  );
};
