import clsx from 'clsx';
import ReactSelect, { GroupBase, Props } from 'react-select';

import {
  DropdownIndicator,
  ErrorIndicator,
  MultiValueRemove,
  Option,
} from './Select.components';
import styles from './Select.module.scss';
import { selectStyles } from './Select.styles';
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
  isCheckbox?: boolean;
  options: Option[];
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  error,
  label,
  disabled,
  isMulti,
  isCheckbox = false,
  name,
  ...props
}: Props<Option, IsMulti, Group> & CustomSelectProps) => {
  return (
    <div
      className={clsx(styles.wrapper, { [styles.wrapper__disabled]: disabled })}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <ReactSelect
        {...props}
        instanceId="t8s-select"
        closeMenuOnSelect={!isMulti}
        styles={selectStyles<Option, IsMulti, Group>(isCheckbox)}
        name={name}
        components={{
          DropdownIndicator: error ? ErrorIndicator : DropdownIndicator,
          IndicatorSeparator: () => null,
          MultiValueRemove,
          ...(isCheckbox ? { Option } : {}), // Conditionally include custom Option component
        }}
        isDisabled={disabled}
        captureMenuScroll={false}
        isMulti={isMulti}
        isClearable={false}
        hideSelectedOptions={!isCheckbox}
        menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
      />
      {error && (
        <p className={styles.error} id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
