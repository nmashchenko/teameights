import { MultiValueRemoveProps, components } from 'react-select';
import { X } from 'shared/assets/Icons/X';

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <X />
    </components.MultiValueRemove>
  );
};
