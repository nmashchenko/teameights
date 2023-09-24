'use client';

import { Button, Typography } from '@/shared/ui';
import { ActionModal } from '@/widgets/modals/action-modal/action-modal';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      <Button onClick={() => setActive(true)}>OPEN</Button>

      {/* For Testing Modal */}
      <div>
        <ActionModal
          heading='Tolkik'
          sub='Без текста'
          buttonOneText='Primary action'
          //Должна быть какая-то логика для кнопки номер 1
          buttonOneAction={() => {}}
          // buttonTwoText='Secondary action'
          //Должна быть какая-то логика для кнопки номер 2
          // buttonTwoAction={() => {}}
          buttonOneType='primary'
          isOpenModal={active}
          handleClose={() => setActive(false)}
        />
      </div>
    </>
  );
}
