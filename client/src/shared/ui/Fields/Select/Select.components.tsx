import { CaretDown } from 'shared/assets/Icons/Caret/CaretDown';
import { CaretUp } from 'shared/assets/Icons/Caret/CaretUp';
import { X } from 'shared/assets/Icons/X';

import {
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  OptionProps,
  components,
} from 'react-select';
import { Check } from 'shared/assets/Icons/Check';
import { WarningCircle } from 'shared/assets/Icons/WarningCircle';
import styles from '../Checkbox/Checkbox.module.scss';

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

export const Option = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  props: OptionProps<OptionType, IsMultiType, GroupType>
) => {
  return (
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        className={styles.checkbox}
        onChange={() => {}}
      />
      <span
        className={styles.checkmark}
        style={{ width: '16px', height: '16px' }}
      >
        <Check />
      </span>
      <span className={styles.label}>{props.label}</span>
    </components.Option>
  );
};

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <X />
    </components.MultiValueRemove>
  );
};
