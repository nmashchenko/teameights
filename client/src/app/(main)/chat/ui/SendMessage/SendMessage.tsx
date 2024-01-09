import { Input } from '@/shared/ui';
import { ChatHeader } from '../ChatHeader';
import { MessageArea } from '../MessageArea';
import styles from './SendMessage.module.scss';

import { PlusIcon } from '@/shared/assets'; // TODO: Add new icons and replace
import { useRef } from 'react';

export const SendMessage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      <ChatHeader />

      <div
        style={{
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          margin: '0px 32px 24px 32px',
        }}
      >
        <MessageArea />

        <div
          style={{
            position: 'sticky',
            marginTop: 'auto',
          }}
        >
          <Input
            placeholder='Write message...'
            ref={inputRef}
            maxWidth='600px'
            subIconPosition='end'
            subIcon={
              <>
                <PlusIcon size='16' />
                <PlusIcon size='16' />
              </>
            }
            style={{
              border: '1px solid rgba(67, 71, 82, 1)',
              borderRadius: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
