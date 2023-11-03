import { FC } from 'react';
import styles from './tag.module.scss';
import { X } from '@/shared/assets';
import { Flex } from '@/shared/ui';

interface TagProps {
  text: string;
  isWithCross?: boolean;
  onClick?: () => void;
}

export const Tag: FC<TagProps> = ({ text, onClick, isWithCross }) => {
  return (
    <Flex justify='space-between' onClick={onClick} className={styles.tag}>
      <p className={styles.text}>{text}</p>
      {isWithCross && (
        <Flex align='center' className={styles.remove}>
          <X />
        </Flex>
      )}
    </Flex>
  );
};
