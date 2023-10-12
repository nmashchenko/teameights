import { components, OptionProps } from 'react-select';
import { OptionType } from '../select-autocomplete';
import { Flex } from '@/shared/ui';
import styles from '../select-autocomplete.module.scss';

export const Option = (props: OptionProps<OptionType>) => {
  return (
    <components.Option {...props}>
      <Flex align='center' gap={8}>
        <img src={props.data.image} className={styles.image} alt='image' />
        {props.data.label}
      </Flex>
    </components.Option>
  );
};
