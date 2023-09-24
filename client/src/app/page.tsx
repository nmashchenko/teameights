'use client';

import { Typography } from 'shared/ui';
import { ActionModal } from 'widgets/modals/action-modal/action-modal';

export default function Home() {
  return (
    <>
      <Typography size='heading_l' variant='h6'>
        We are working hard to deliver teameights on NextJS/TS soon!
      </Typography>

      <a href='/login' style={{ color: 'green' }}>
        Get to login
      </a>

      {/* For Testing Modal */}
      <div>
        <ActionModal
          heading='Removing member'
          sub='Are you sure you want to remove member from team?'
          buttonOneText='Primary action'
          //Должна быть какая-то логика для кнопки номер 1
          buttonOneAction={() => {}}
          buttonTwoText='Secondary action'
          //Должна быть какая-то логика для кнопки номер 2
          buttonTwoAction={() => {}}
          isOpenModal={true}
        />
      </div>
    </>
  );
}
