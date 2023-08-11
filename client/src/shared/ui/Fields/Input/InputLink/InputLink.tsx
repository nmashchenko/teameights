import { Input, InputProps } from '../Input';

import { FC } from 'react';

import { Link } from 'shared/assets/Icons/Link';
import styles from './InputLink.module.scss';

const InputLink: FC<InputProps> = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkwrapper}>
        <Link />
      </div>
      <Input {...props} />
    </div>
  );
};

export default InputLink;
