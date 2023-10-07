import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './tag.module.scss';
import { X } from '@/shared/assets';

interface ITagProps {
  text: string;
  isWithCross?: boolean;
  onClick?: () => void;
}

const Tag: FC<ITagProps> = ({ text, onClick, isWithCross }) => {
  return (
    <div onClick={onClick} className={clsx(styles.tag)}>
      <p className={clsx(styles.label)}>{text}</p>
      {isWithCross && (
        <span className={clsx(styles.remove)}>
          <X />
        </span>
      )}
    </div>
  );
};

export default Tag;
