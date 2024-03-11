import { Input } from '@/shared/ui';
import { ChatHeader } from '../ChatHeader';
import { MessageArea } from '../MessageArea';
import styles from './SendMessage.module.scss';

import { PlusIcon } from '@/shared/assets'; // TODO: Add new icons and replace
import { useContext, useRef } from 'react';
import { CurrentChat } from '../../page';
import { useQuery } from '@tanstack/react-query';
import qs from 'qs';
import { API } from '@/shared/api';

const customParamsSerializer = params =>
  qs.stringify(params, {
    encode: false, // Отключаем автоматическое кодирование
    encoder: str => str, // Переопределение функции кодирования, чтобы она просто возвращала строку без изменений
  });

const useGetChatMessages = ({ filters, sort }: any) => {
  return useQuery({
    queryKey: ['chatMessages', filters, sort],
    queryFn: async () => {
      const params = {
        filters: JSON.stringify(filters),
        sort: JSON.stringify([sort]),
      };

      return await API.get(`/chat/message/filter?` + decodeURI(qs.stringify(params)));
    },
  });
};

export const SendMessage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentChat } = useContext(CurrentChat);

  const getChatMessagesQuery = useGetChatMessages({
    filters: { chatgroup: currentChat?.id },
    sort: { orderBy: 'text', order: 'desc' },
  });

  console.log('@', currentChat, getChatMessagesQuery.data?.data);

  if (!currentChat) {
    return <div className={styles.container} />;
  }

  return (
    <div className={styles.container}>
      <ChatHeader />

      <div className={styles.chatBody}>
        <MessageArea messages={getChatMessagesQuery.data?.data?.data} />
        <div className={styles.input}>
          <Input
            placeholder='Write message...'
            ref={inputRef}
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
