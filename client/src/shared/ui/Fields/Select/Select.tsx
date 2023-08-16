import clsx from 'clsx';
import ReactSelect, { components, DropdownIndicatorProps } from 'react-select';
import { CaretDown } from 'shared/assets/Icons/Caret/CaretDown';
import { CaretUp } from 'shared/assets/Icons/Caret/CaretUp';
import { InputProps } from '../Input/Input';
import styles from './Select.module.scss';
import { selectStyles } from './Select.styles';
/* 
ex: 
<Select
    control={control}
    name='select'
    label='Select'
    options={SelectOptions}
    type='checkboxes'
/>
*/

type OptionsType = {
  value: string | number;
  label: string;
};

interface SelectProps extends Omit<InputProps, 'register'> {
  isMulti?: boolean;
  options: OptionsType[];
  disabled?: boolean;
  //   value: string;
  //   onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  label,
  name,
  error,
  options,
  disabled = false, //   value,
} //   onChange,
: SelectProps) => {
  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {props.selectProps.menuIsOpen ? <CaretUp /> : <CaretDown />}
        </components.DropdownIndicator>
      )
    );
  };

  return (
    <div className={clsx(styles.wrapper, {}, [])}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <ReactSelect
        closeMenuOnSelect={true}
        styles={selectStyles}
        name={name}
        options={options}
        defaultValue={options ? options[0] : null}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        isDisabled={disabled}
        captureMenuScroll={false}
      />
      {error && (
        <span className={styles.error} id={`${name}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
