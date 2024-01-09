import { UserElement, IUserElement } from '../UserElement';
import styles from './chats.module.scss';
import { Tabs } from '@/shared/ui';

const DBOfUsers: Array<IUserElement> = [
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cool developers',
    hasUnreadMessages: true,
    countOfUnreadMessages: 26,
    lastMessage: '1',
    lastMessageSenderName: 'Cato Augustino',
    isLastMessageChecked: true,
    timestampOfLastMessage: '15:56',
    isGroup: true,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cato Augustino',
    hasUnreadMessages: true,
    countOfUnreadMessages: 5,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Cato Augustino',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'John Snow',
    hasUnreadMessages: false,
    countOfUnreadMessages: 0,
    lastMessage: 'Салам алейкум братьям',
    lastMessageSenderName: 'Vladi slave',
    isLastMessageChecked: false,
    timestampOfLastMessage: '00:00',
    isGroup: false,
  },
];

export const Chats = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ position: 'sticky', margin: '32px 0px 24px 24px' }}>
        <Tabs
          currentTab='My team'
          onTabChange={selectedTab => console.log(`Switched to ${selectedTab}`)}
          options={['My team', 'Others']}
        />
      </div>

      <div
        style={{
          maxHeight: '510px',
          overflowY: 'auto'
        }}
      >
        {DBOfUsers.map((item, id) => {
          return (
            <div key={id}>
              <UserElement
                avatarUrl={item.avatarUrl}
                title={item.title}
                hasUnreadMessages={item.hasUnreadMessages}
                countOfUnreadMessages={item.countOfUnreadMessages}
                lastMessage={item.lastMessage}
                lastMessageSenderName={item.lastMessageSenderName}
                isLastMessageChecked={item.isLastMessageChecked}
                timestampOfLastMessage={item.timestampOfLastMessage}
                isGroup={item.isGroup}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
