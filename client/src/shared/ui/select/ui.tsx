import clsx from 'clsx';
import ReactSelect, { GroupBase, Props } from 'react-select';

import { selectStyles } from './lib/selectStyles';
import styles from './styles.module.scss';
import { DropdownIndicator } from './ui/dropdown-indicator';
import { ErrorIndicator } from './ui/error-indicator';
import { MultiValueRemove } from './ui/multi-value-remove';
import { Option } from './ui/option';
/* 
ex: 
<Select
    name='select'
    label='Select'
    options={selectOptions}
    isMulti={true}
/>
*/

type Option = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  error?: string;
  label?: string;
  disabled?: boolean;
  isBorderDisabled?: boolean;
  isCheckbox?: boolean;
  options: Option[];
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  error,
  label,
  disabled,
  isBorderDisabled = false,
  isMulti,
  isCheckbox = false,
  name,
  ...props
}: Props<Option, IsMulti, Group> & CustomSelectProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.container__disabled]: disabled
      })}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <ReactSelect
        {...props}
        instanceId='t8s-select'
        closeMenuOnSelect={!isMulti}
        styles={selectStyles<Option, IsMulti, Group>(isCheckbox, isBorderDisabled)}
        name={name}
        components={{
          DropdownIndicator: error ? ErrorIndicator : DropdownIndicator,
          IndicatorSeparator: () => null,
          MultiValueRemove,
          ...(isCheckbox ? { Option } : {}) // Conditionally include custom Option component
        }}
        isDisabled={disabled}
        captureMenuScroll={false}
        isMulti={isMulti}
        isClearable={false}
        hideSelectedOptions={!isCheckbox}
        menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
      />
      {error && (
        <p className={styles.error} id={`${name}-error`} role='alert'>
          {error}
        </p>
      )}
    </div>
  );
};
