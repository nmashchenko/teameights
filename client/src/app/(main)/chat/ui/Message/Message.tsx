import { Typography } from '@/shared/ui';
import Image from 'next/image';

interface usersThatReadMessage {
  userId: boolean;
}

interface Message {
  senderId: string;
  // receiver: Array<>, // Main data of receivers. TODO: Find right props for it without useless data in it
  groupId?: string;
  isMessageRead: Array<usersThatReadMessage>;
  text: string;
  fileId?: string;
  isThisMessageMine: boolean;
  timestamp: string;
}

export function Message({
  senderId,
  // receiver,
  groupId,
  isMessageRead,
  text,
  fileId,
  isThisMessageMine,
  timestamp,
}: Message) {
  return (
    <div
      style={{
        display: 'inline-flex',
        marginLeft: isThisMessageMine ? '35%' : '0',
        alignItems: 'flex-start',
        marginBottom: 25,
      }}
    >
      {isThisMessageMine ? (
        <div></div>
      ) : (
        <Image
          src='https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          height={32}
          width={32}
          alt='Avatar'
          style={{
            borderRadius: "100px",
            marginRight: 12
          }}
        />
      )}
      <div
        style={{
          flex: '1 1 0',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 6,
          display: 'inline-flex',
        }}
      >
        {isThisMessageMine ? (
          <div></div>
        ) : (
          <div
            style={{
              alignSelf: 'stretch',
              color: '#FFB45C',
              fontSize: 14,
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            Me
          </div>
        )}
        <div
          style={{
            alignSelf: 'stretch',
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 8,
            paddingBottom: 8,
            background: isThisMessageMine ? 'rgba(6, 64, 6, 1)' : '#2F3239',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.06)',
            borderRadius: isThisMessageMine ? '10px 0px 10px 10px' : '0px 10px 10px 10px',
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              color: 'white',
              fontSize: 16,
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            {text}
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              textAlign: 'right',
              color: '#8F9094',
              fontSize: 12,
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
