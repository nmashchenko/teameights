import { Message } from '../Message';
import styles from './MessageArea.module.scss';

const DBofMessages = [
  {
    senderId: '123',
    groupId: '123123',
    isMessageRead: [
      {
        userId: false,
      },
    ],
    text: '1fjdfjpasdifjasdfspdfijaspfdjapsdf',
    isThisMessageMine: false,
    timestamp: '15:36',
  },
  {
    senderId: '123',
    groupId: '123123',
    isMessageRead: [
      {
        userId: true,
      },
    ],
    text: 'sdfjsajdfpasjdfasidfjpoasidfjpasidjfpasidfjpaosdifjpaosidfjpasdoijdfa',
    isThisMessageMine: false,
    timestamp: '12:18',
  },
  {
    senderId: '123',
    groupId: '123123',
    isMessageRead: [
      {
        userId: true,
      },
    ],
    text: 'sdfjsajdfpapafpoidsipaidfidfidfisdfsidfdjf',
    isThisMessageMine: true,
    timestamp: '12:18',
  },
  {
    senderId: '123',
    groupId: '123123',
    isMessageRead: [
      {
        userId: true,
      },
    ],
    text: 'sdfjsajdfpasjdfasidfjpoasidfjpasidjfpasidfjpaosdifjpaosidfjpasdoijdfa',
    isThisMessageMine: false,
    timestamp: '12:18',
  },
  {
    senderId: '123',
    groupId: '123123',
    isMessageRead: [
      {
        userId: true,
      },
    ],
    text: 'Lorem ipsum dolor sit amet very long-long message bla bla bla. ',
    isThisMessageMine: true,
    timestamp: '12:18',
  },
];

export const MessageArea = ({ messages }: any) => {
  return (
    <div className={styles.messages}>
      {messages?.map((item, id) => {
        return (
          <Message
            senderId={item.senderId}
            groupId={item.senderId}
            isMessageRead={item.isMessageRead}
            text={item.text}
            fileId={item.fileId}
            isThisMessageMine={item.isThisMessageMine}
            timestamp={item.timestamp}
          />
        );
      })}
    </div>
  );
};
