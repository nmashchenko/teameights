import type { Meta } from '@storybook/react';
import { UserDesktop } from './desktop';
import { Button, Flex } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { generateMockUser } from '@/shared/lib/mock';
import { IUserBase } from '@teameights/types';

const meta: Meta<typeof UserDesktop> = {
  title: 'widgets/modals/info/user/desktop',
  component: UserDesktop,
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
    <div>
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
      <UserDesktop user={developer} isOpenModal={openDev} handleClose={() => setOpenDev(false)} />
      <UserDesktop
        user={designer}
        isOpenModal={openDesigner}
        handleClose={() => setOpenDesigner(false)}
      />
      <UserDesktop user={pm} isOpenModal={openPM} handleClose={() => setOpenPM(false)} />
    </div>
  );
};
