// import { Flex, Modal, Typography } from '@/shared/ui';
// import { SelectAutocomplete } from '@/shared/ui/select/ui/select-autocomplete/select-autocomplete';
// import { FC, PropsWithChildren } from 'react';
// import styles from './send-invite-modal.module.scss';

// export interface InteractiveModalProps {
//   heading: string;
//   sub?: string;
// }

// export const InteractiveModal: FC<PropsWithChildren<InteractiveModalProps>> = ({
//   heading,
//   children,
// }) => {
//   return (
//     <div>
//       <Modal isOpen={true} size='s'>
//         <Flex height='350px' direction='column' gap='24px'>
//           <div className={styles.text}>
//             <Typography color='white' size='heading_m'>
//               {heading}
//             </Typography>
//           </div>
//           <div>
//             <SelectAutocomplete name='concentration' />
//           </div>
//         </Flex>
//         <Flex>{children}</Flex>
//       </Modal>
//     </div>
//   );
// };
