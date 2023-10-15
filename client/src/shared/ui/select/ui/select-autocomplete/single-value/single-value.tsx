import { components, SingleValueProps } from 'react-select';
import { Flex } from '@/shared/ui';
import styles from '../select-autocomplete.module.scss';
import { OptionType } from '../select-autocomplete';

export const SingleValue = ({ children, ...props }: SingleValueProps<OptionType>) => (
  <components.SingleValue {...props}>
    <Flex align='center' gap={8}>
      <img src={props.data.image} className={styles.image} alt='image' />
      {children}
    </Flex>
  </components.SingleValue>
);
