import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import { CaretDownIcon, CaretUpIcon } from '@/shared/assets';

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
        {props.selectProps.menuIsOpen ? <CaretUpIcon /> : <CaretDownIcon />}
      </components.DropdownIndicator>
    )
  );
};
