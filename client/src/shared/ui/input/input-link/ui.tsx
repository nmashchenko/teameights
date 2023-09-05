import { Input, InputProps } from '../ui';

import { FC } from 'react';

import { Link } from 'shared/assets/Icons/Link';
import styles from './styles.module.scss';

export const InputLink: FC<InputProps> = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkwrapper}>
        <Link />
      </div>
      <Input {...props} />
    </div>
  );
};
