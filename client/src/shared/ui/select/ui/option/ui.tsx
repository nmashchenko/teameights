import type { GroupBase, OptionProps } from 'react-select';
import { components } from 'react-select';
import { Check } from 'shared/assets';

import styles from 'shared/ui/checkbox/styles.module.scss';

export const Option = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  properties: OptionProps<OptionType, IsMultiType, GroupType>
) => (
  <components.Option {...properties}>
    <input
      type='checkbox'
      checked={properties.isSelected}
      className={styles.checkbox}
      onChange={() => {}}
    />
    <span className={styles.checkmark} style={{ height: '16px', width: '16px' }}>
      <Check />
    </span>
    <span className={styles.label}>{properties.label}</span>
  </components.Option>
);
