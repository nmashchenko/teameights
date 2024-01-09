import { Message } from '../Message';

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
    isThisMessageMine: true,
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
    text: 'sdfjsajdfpasjdfasidfjpoasidfjpasidjfpasidfjpaosdifjpaosidfjpasdoijdfafasjdfpoisajfpoiasjfpoiasdjfpoiasdjfpoidsipaidfidfidfisdfsidfdjf',
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
    text: 'sdfjsajdfpasjdfasidfjpoasidfjpasidjfpasidfjpaosdifjpaosidfjpasdoijdfa',
    isThisMessageMine: false,
    timestamp: '12:18',
  },
];

export const MessageArea = () => {
  return (
    <div
      style={{
        overflowY: 'auto',
      }}
    >
      {DBofMessages.map((item, id) => {
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
