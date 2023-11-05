import { FC } from 'react';
import styles from './tag.module.scss';
import { X } from '@/shared/assets';
import { Flex } from '@/shared/ui';
import clsx from 'clsx';

interface TagProps {
  text: string;
  isWithCross?: boolean;
  isFilledWhileHover?: boolean;
  onClick?: () => void;
}

export const Tag: FC<TagProps> = ({
  text,
  onClick,
  isWithCross = false,
  isFilledWhileHover = false,
}) => {
  return (
    <Flex justify='space-between' onClick={onClick} className={styles.tag}>
      <p
        className={clsx(styles.text, {
          [styles.text_with_hover]: isFilledWhileHover,
        })}
      >
        {text}
      </p>
      {isWithCross && (
        <Flex align='center' className={styles.remove}>
          <X />
        </Flex>
      )}
    </Flex>
  );
};
