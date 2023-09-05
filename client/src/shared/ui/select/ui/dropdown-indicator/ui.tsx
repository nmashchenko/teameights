import { DropdownIndicatorProps, GroupBase, components } from 'react-select';
import { CaretDown } from 'shared/assets/Icons/Caret/CaretDown';
import { CaretUp } from 'shared/assets/Icons/Caret/CaretUp';

export const DropdownIndicator = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
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
