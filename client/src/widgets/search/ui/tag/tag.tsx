import { FC } from 'react';
import styles from './tag.module.scss';
import { XIcon } from '@/shared/assets';
import { Flex, Typography } from '@/shared/ui';
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
      <Typography
        className={clsx(styles.text, {
          [styles.text_with_hover]: isFilledWhileHover,
        })}
        size='body_s'
        variant='p'
      >
        {text}
      </Typography>
      {isWithCross && (
        <Flex align='center' className={styles.remove}>
          <XIcon />
        </Flex>
      )}
    </Flex>
  );
};
