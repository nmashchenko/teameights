import { DropdownIndicatorProps, GroupBase, components } from 'react-select';
import { WarningCircle } from 'shared/assets';

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
