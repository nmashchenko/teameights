// import { FC } from 'react';
// import styles from './desktop.module.scss';
// import { Typography, Button, Modal, Flex } from '@/shared/ui';
// import { ArrowRightIcon } from '@/shared/assets';
// import { InfoModalTeamProps } from '../interfaces';
// import { ImageLoader } from '@/shared/ui/image-loader/image-loader';
// import { capitalize, getCountryFlag } from '@/shared/lib';
//
// const mockNavigate = (path: string) => {
//   console.log(`navigate to ${path}`);
//   // TODO: add real navigation here
// };
//
// export const TeamDesktop: FC<InfoModalTeamProps> = ({
//   user,
//   team,
//   handleJoin,
//   isOpenModal,
//   handleClose,
// }) => {
//   return (
//     <>
//       <Modal isOpen={isOpenModal} onClose={handleClose} size='l'>
//         <Flex direction='column' gap='24px'>
//           <Flex gap='16px' maxHeight='70px'>
//             <ImageLoader
//               width={70}
//               height={70}
//               src={team?.photo?.path || ''}
//               alt='Team image'
//               borderRadius='50%'
//             />
//
//             <Flex align='center'>
//               <Flex direction='column' gap='8px'>
//                 <Typography size='heading_s' color='white'>
//                   {team?.name}
//                 </Typography>
//                 <Flex gap='4px' align='center'>
//                   <Typography size='body_s' color='greyNormal'>
//                     {capitalize(team?.type)} Type, {team?.country}
//                   </Typography>
//                   <ImageLoader
//                     width={16}
//                     height={10}
//                     src={getCountryFlag(team?.country)}
//                     alt='Team flag image'
//                   />
//                 </Flex>
//               </Flex>
//             </Flex>
//           </Flex>
//           <Flex gap='48px' direction='row'>
//             <Typography size='body_m'>
//               Tournaments: <span className={styles.span_text}>0</span>
//             </Typography>
//             <Typography size='body_m'>
//               Wins: <span className={styles.span_text}>{team?.wins}</span>
//             </Typography>
//             <Typography size='body_m'>
//               Points: <span className={styles.span_text}>{team?.points}</span>
//             </Typography>
//           </Flex>
//           {team?.description && (
//             <Typography size='body_m' color='white'>
//               {team?.description}
//             </Typography>
//           )}
//           <Flex gap='36px' maxHeight='50px' direction='row'>
//             <ImageLoader
//               crownSize={20}
//               width={50}
//               height={50}
//               src={team?.leader?.photo?.path || ''}
//               alt='Team leader image'
//               borderRadius='50%'
//             />
//             <div>
//               {team?.members.length && (
//                 <Flex gap='8px'>
//                   {team?.members?.map((teammate, index) => (
//                     <ImageLoader
//                       width={50}
//                       height={50}
//                       src={teammate?.photo?.path || ''}
//                       alt='Team member image'
//                       borderRadius='50%'
//                       key={index}
//                     />
//                   ))}
//                 </Flex>
//               )}
//             </div>
//           </Flex>
//           <Flex width='100%' justify='space-between' align='center' margin='24px 0 0 0'>
//             <Button
//               typeBtn='primary'
//               size='m'
//               width='109px'
//               disabled={team?.leader.id === user?.id}
//               onClick={handleJoin}
//             >
//               {team?.leader.id === user?.id ? 'Your team' : 'Join team'}
//             </Button>
//
//             <Button
//               color='white'
//               size='m'
//               typeBtn='tertiary'
//               onClick={() => mockNavigate('/team/' + team?.id)}
//               padding='0'
//             >
//               Profile
//               <ArrowRightIcon />
//             </Button>
//           </Flex>
//         </Flex>
//       </Modal>
//     </>
//   );
// };
