import { Input, InputProps } from '../input/input';

import { FC } from 'react';

import { LinkIcon } from '@/shared/assets';
import styles from './input-link.module.scss';

export const InputLink: FC<InputProps> = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkwrapper}>
        <LinkIcon />
      </div>
      <Input {...props} />
    </div>
  );
};
