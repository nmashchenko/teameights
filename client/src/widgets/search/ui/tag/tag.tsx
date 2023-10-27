import { FC } from 'react';
import clsx from 'clsx';
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
    <Flex justify='space-between' onClick={onClick} className={clsx(styles.tag)}>
      <p className={clsx(styles.text)}>{text}</p>
      {isWithCross && (
        <Flex align='center' className={clsx(styles.remove)}>
          <X />
        </Flex>
      )}
    </Flex>
  );
};
