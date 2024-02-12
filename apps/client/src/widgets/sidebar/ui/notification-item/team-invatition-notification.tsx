// import React from 'react';
// import Image from 'next/image';
//
// import { Flex } from '@/shared/ui';
// import { getElapsedTime } from '@/shared/lib';
//
// import styles from './notification-item.module.scss';
// import { ITeamInvitationNotification } from '@teameights/types';
//
// interface TeamInvatitionNotificationProps {
//   notification: ITeamInvitationNotification;
//   handleAccept: () => void;
//   handleReject: () => void;
// }
//
// /**
//  * SidebarTeamInvatitionNotification component renders team invitation notification content.
//  *
//  * @component
//  * @param {Object} props - The properties object.
//  * @param {TeamInvitationNotification} props.notification - The team invitation notification object.
//  * @param {Function} props.handleAccept - The handler function for accept action.
//  * @param {Function} props.handleReject - The handler function for reject action.
//  *
//  * @example
//  * <SidebarTeamInvatitionNotification
//  *    notification={teamInvitationNotificationObj}
//  *    handleAccept={handleAcceptInvitation}
//  *    handleReject={handleRejectInvitation}
//  * />
//  */
// export const SidebarTeamInvatitionNotification: React.FC<
//   TeamInvatitionNotificationProps
// > = props => {
//   const { notification, handleReject, handleAccept } = props;
//   return (
//     <>
//       <Flex gap='12px'>
//         <div className={styles.messagePicture}>
//           {!notification.read && <div className={styles.messageCircle} />}
//           <Image width={32} height={32} src={notification.photo.path} alt='Team invation icon' />
//         </div>
//         <div className={styles.messageContentWrapper}>
//           <p className={styles.messageText}>{notification.message}</p>
//           <Flex gap='8px'>
//             <button onClick={handleAccept} className={`${styles.messageButton} ${styles.accept}`}>
//               Accept
//             </button>
//             <button onClick={handleReject} className={styles.messageButton}>
//               Reject
//             </button>
//           </Flex>
//         </div>
//       </Flex>
//       <p className={styles.sendingTime}>{getElapsedTime(notification.createdAt)}</p>
//     </>
//   );
// };
