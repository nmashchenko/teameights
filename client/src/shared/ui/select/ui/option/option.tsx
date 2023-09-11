import { components, GroupBase, OptionProps } from 'react-select';
import { Check } from 'shared/assets';
import styles from 'shared/ui/checkbox/checkbox.module.scss';

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
        type='checkbox'
        checked={props.isSelected}
        className={styles.checkbox}
        onChange={() => {}}
      />
      <span className={styles.checkmark} style={{ width: '16px', height: '16px' }}>
        <Check />
      </span>
      <span className={styles.label}>{props.label}</span>
    </components.Option>
  );
};
