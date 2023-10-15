import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import { CaretDown, CaretUp } from '@/shared/assets';

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
