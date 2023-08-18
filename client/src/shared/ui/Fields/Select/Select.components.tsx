import { CaretDown } from 'shared/assets/Icons/Caret/CaretDown';
import { CaretUp } from 'shared/assets/Icons/Caret/CaretUp';
import { X } from 'shared/assets/Icons/X';

import {
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  components,
} from 'react-select';
import { WarningCircle } from 'shared/assets/Icons/WarningCircle';

export const DropdownIndicator = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  props: DropdownIndicatorProps<OptionType, IsMultiType, GroupType>
) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <CaretUp /> : <CaretDown />}
      </components.DropdownIndicator>
    )
  );
};

export const ErrorIndicator = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  props: DropdownIndicatorProps<OptionType, IsMultiType, GroupType>
) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <WarningCircle />
      </components.DropdownIndicator>
    )
  );
};

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <X />
    </components.MultiValueRemove>
  );
};
