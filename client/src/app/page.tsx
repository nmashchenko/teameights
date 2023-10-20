'use client';

import { Flex, Typography, Skeleton, Button, Drawer } from '@/shared/ui';
import { useGetScreenWidth } from '@/shared/lib';
import { Crown } from '@/shared/assets';
import { NewtonsCradle, RaceBy, Ring } from '@uiball/loaders';
import { toast } from 'sonner';
import { useState } from 'react';
import { SelectAutocomplete } from '@/shared/ui/select/ui/select-autocomplete/select-autocomplete';
import { useGetMe } from '@/entities/session/model/queries/useGetMe';

export default function Home() {
  const width = useGetScreenWidth();
  const [open, setOpen] = useState(false);
  const { data } = useGetMe();

  console.log(data);

  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <div> The screen width is: {width} </div>

      <Typography>Hello, {data?.username || 'failed to fetch'}!</Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <Flex direction='column' gap='200px' width='100%' justify='center' align='center'>
        <Flex gap='150px'>
          <Skeleton width={70} height={70} />
          <Skeleton width={70} height={70} />
        </Flex>
      </Flex>

      <Crown width={70} height={70} />

      <Button
        onClick={() =>
          toast('Loading some dummy data lol...', {
            icon: <Ring size={17} speed={1.5} color='white' />,
          })
        }
      >
        Spawn loading toaster
      </Button>

      <Flex direction='column' gap='200px' width='100%' justify='center' align='center'>
        <NewtonsCradle size={50} speed={1.4} color='white' />

        <RaceBy size={80} lineWeight={5} speed={1.4} color='#46A11B' />
      </Flex>

      <Button typeBtn='tertiary' onClick={() => setOpen(true)}>
        open drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <button onClick={() => setOpen(false)}>close</button>
      </Drawer>

      <SelectAutocomplete />
    </>
  );
}
