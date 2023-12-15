import { FC } from 'react';
import { Flex } from '@/shared/ui';
import { SearchIcon } from '@/shared/assets';
import { useGetScreenWidth } from '@/shared/lib';
import styles from './modal-button.module.scss';

interface ModalButtonProps {
  onOpen: () => void;
  onClose: () => void;
}

export const ModalButton: FC<ModalButtonProps> = ({ onOpen, onClose }) => {
  const screenWidth = useGetScreenWidth();

  if (screenWidth > 768) {
    onClose();

    return null;
  }

  return (
    <Flex align='center' justify='center' className={styles.modal_button} onClick={onOpen}>
      <SearchIcon className={styles.search_icon} />
    </Flex>
  );
};
