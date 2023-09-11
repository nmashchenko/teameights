import type { MultiValueRemoveProps } from 'react-select';
import { components } from 'react-select';
import { X } from 'shared/assets';

export const MultiValueRemove = (properties: MultiValueRemoveProps) => (
  <components.MultiValueRemove {...properties}>
    <X />
  </components.MultiValueRemove>
);
