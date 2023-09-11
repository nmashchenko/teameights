import type { FC } from 'react';
import { Link } from 'shared/assets';

import type { InputProps as InputProperties } from '../ui';
import { Input } from '../ui';

import styles from './styles.module.scss';

export const InputLink: FC<InputProperties> = ({ ...properties }) => (
  <div className={styles.wrapper}>
    <div className={styles.linkwrapper}>
      <Link />
    </div>
    <Input {...properties} />
  </div>
);
