import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import { WarningCircleIcon } from '@/shared/assets';

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
        <WarningCircleIcon />
      </components.DropdownIndicator>
    )
  );
};
