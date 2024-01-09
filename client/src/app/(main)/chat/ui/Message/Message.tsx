import { Typography } from '@/shared/ui';

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
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(47, 50, 57, 1)',
        padding: '8px 14px 22px 14px',
        borderRadius: '0px 10px 10px 10px',
        maxWidth: '600px',
        marginBottom: '22px',
      }}
    >
      <p style={{
        maxWidth: '610px',
        textWrap: 'wrap',
      }}>{text}</p>
      <p
        style={{
          marginTop: '4px',
          color: 'rgba(143, 144, 148, 1)',
        }}
      >
        {timestamp}
      </p>
    </div>
  );
}
