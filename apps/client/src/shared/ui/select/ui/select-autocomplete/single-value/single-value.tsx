import { components, SingleValueProps } from 'react-select';
import { Flex, ImageLoader } from '@/shared/ui';
import { OptionType } from '../select-autocomplete';

export const SingleValue = ({ children, ...props }: SingleValueProps<OptionType>) => (
  <components.SingleValue {...props}>
    <Flex align='center' gap={8}>
      <ImageLoader
        src={props.data.image}
        alt={props.data.label}
        width={24}
        height={24}
        borderRadius='50px'
      />
      {children}
    </Flex>
  </components.SingleValue>
);
