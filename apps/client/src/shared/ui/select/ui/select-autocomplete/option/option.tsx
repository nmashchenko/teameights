import { components, OptionProps } from 'react-select';
import { OptionType } from '../select-autocomplete';
import { Flex, ImageLoader } from '@/shared/ui';

export const Option = (props: OptionProps<OptionType>) => {
  return (
    <components.Option {...props}>
      <Flex align='center' gap={8}>
        <ImageLoader
          src={props.data.image}
          alt={props.data.label}
          width={24}
          height={24}
          borderRadius='50px'
        />
        {props.data.label}
      </Flex>
    </components.Option>
  );
};
