import { FC } from 'react';
import clsx from 'clsx';
import styles from './tag.module.scss';
import { X } from '@/shared/assets';

interface TagProps {
  text: string;
  isWithCross?: boolean;
  onClick?: () => void;
}

export const Tag: FC<TagProps> = ({ text, onClick, isWithCross }) => {
  return (
    <div onClick={onClick} className={clsx(styles.tag)}>
      <p className={clsx(styles.text)}>{text}</p>
      {isWithCross && (
        <span className={clsx(styles.remove)}>
          <X />
        </span>
      )}
    </div>
  );
};
