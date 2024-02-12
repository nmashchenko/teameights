import { components, ControlProps } from 'react-select';
import { SearchIcon } from '@/shared/assets';
import { OptionType } from '../select-autocomplete';
import styles from './control.module.scss';

export const Control = ({ children, ...props }: ControlProps<OptionType>) => (
  <components.Control {...props}>
    <div className={styles.iconWrapper}>
      <SearchIcon />
    </div>
    {children}
  </components.Control>
);
