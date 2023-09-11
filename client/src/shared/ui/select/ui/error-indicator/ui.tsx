import type { DropdownIndicatorProps, GroupBase } from 'react-select';
import { components } from 'react-select';
import { WarningCircle } from 'shared/assets';

export const ErrorIndicator = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  properties: DropdownIndicatorProps<OptionType, IsMultiType, GroupType>
) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...properties}>
      <WarningCircle />
    </components.DropdownIndicator>
  );
