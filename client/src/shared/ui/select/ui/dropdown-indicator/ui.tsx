import type { DropdownIndicatorProps, GroupBase } from 'react-select';
import { components } from 'react-select';
import { CaretDown, CaretUp } from 'shared/assets';

export const DropdownIndicator = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  properties: DropdownIndicatorProps<OptionType, IsMultiType, GroupType>
) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...properties}>
      {properties.selectProps.menuIsOpen ? <CaretUp /> : <CaretDown />}
    </components.DropdownIndicator>
  );
