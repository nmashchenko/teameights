import { Input } from '@/shared/ui';
import { ChatHeader } from '../ChatHeader';
import { MessageArea } from '../MessageArea';
import styles from './SendMessage.module.scss';
import { useContext, useRef } from 'react';
import { CurrentChat } from '../../page';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import qs from 'qs';
import { API } from '@/shared/api';
import { PaperPlaneRightIcon } from '@/shared/assets/icons/paper-plane-right';

const chatBaseKey = 'chat';

const useGetChatMessages = ({ filters, sort }: any) => {
  return useQuery({
    queryKey: [chatBaseKey, 'chatMessages', filters, sort],
    queryFn: async () => {
      const params = {
        filters: JSON.stringify(filters),
        sort: JSON.stringify([sort]),
      };

      return await API.get(`/chat/message/filter?` + decodeURI(qs.stringify(params)));
    },
  });
};

const useInvalidateChatMessages = () => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: [chatBaseKey, 'chatMessages'] });
  };
};

const useSendMessage = () => {
  return useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (data: { text: string; chatgroup: string }) => {
      return await API.post('/chat/message/send', { ...data, receivers: [22, 23] });
    },
  });
};

export const SendMessage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentChat } = useContext(CurrentChat);

  const getChatMessagesQuery = useGetChatMessages({
    filters: { chatgroup: currentChat?.id },
    sort: { orderBy: 'text', order: 'asc' },
  });
  const sendMessageMutation = useSendMessage();
  const invalidateChatMessages = useInvalidateChatMessages();

  if (!currentChat) {
    return <div className={styles.container} />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await sendMessageMutation.mutateAsync({
      text: inputRef.current?.value || '',
      chatgroup: currentChat.id,
    });
    inputRef.current!.value = '';
    invalidateChatMessages();
  };

  return (
    <div className={styles.container}>
      <ChatHeader />

      <div className={styles.messagesBody}>
        <MessageArea messages={getChatMessagesQuery.data?.data?.data} />

        <form onSubmit={handleSubmit}>
          <Input
            className={styles.input}
            placeholder='Write message...'
            ref={inputRef}
            subIconPosition='end'
            subIcon={
              <>
                <button type='submit'>
                  <PaperPlaneRightIcon />
                </button>
              </>
            }
            style={{
              border: '1px solid rgba(67, 71, 82, 1)',
              borderRadius: '10px',
            }}
          />
        </form>
      </div>
    </div>
  );
};
