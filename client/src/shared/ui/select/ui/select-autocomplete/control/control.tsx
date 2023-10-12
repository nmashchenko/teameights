import { components, ControlProps } from 'react-select';
import { Search } from '@/shared/assets';
import { OptionType } from '../select-autocomplete';
import styles from './control.module.scss';

export const Control = ({ children, ...props }: ControlProps<OptionType>) => (
  <components.Control {...props}>
    <div className={styles.icon_wrapper}>
      <Search />
    </div>
    {children}
  </components.Control>
);
