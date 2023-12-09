import { FC, PropsWithChildren } from 'react';
import styles from './tag.module.scss';
import { XIcon } from '@/shared/assets';
import { Flex, Typography } from '@/shared/ui';
import clsx from 'clsx';

interface TagProps {
  isWithCross?: boolean;
  isFilledWhileHover?: boolean;
  isRounded?: boolean;
  onClick?: () => void;
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  onClick,
  isWithCross = false,
  isFilledWhileHover = false,
  isRounded = true,
  children,
}) => {
  return (
    <Flex
      justify='space-between'
      onClick={onClick}
      className={clsx(styles.tag, {
        [styles.tag_rounded]: isRounded,
      })}
    >
      <Typography
        className={clsx(styles.text, {
          [styles.text_with_hover]: isFilledWhileHover,
        })}
        size='body_s'
        variant='p'
      >
        {children}
      </Typography>
      {isWithCross && (
        <Flex align='center' className={styles.remove}>
          <XIcon />
        </Flex>
      )}
    </Flex>
  );
};
