import { components, MultiValueRemoveProps } from 'react-select';
import { XIcon } from '@/shared/assets';

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <XIcon />
    </components.MultiValueRemove>
  );
};
