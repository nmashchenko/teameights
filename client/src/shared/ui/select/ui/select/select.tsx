'use client';
import clsx from 'clsx';
import ReactSelect, { GroupBase, Props } from 'react-select';

import { selectStyles } from '../../lib/select-styles';
import styles from './select.module.scss';
import { DropdownIndicator } from './dropdown-indicator';
import { ErrorIndicator } from './error-indicator';
import { MultiValueRemove } from './multi-value-remove';
import { Option } from './option';

/**
 * Select Component
 *
 * A customizable select component based on `ReactSelect`. Provides support for single and multi selects as well as checkbox style options.
 *
 * Props:
 *
 * @prop {string} [error] - Error message string. If provided, the dropdown indicator will switch to the error indicator.
 * @prop {string} [label] - Label to display above the select component.
 * @prop {boolean} [disabled=false] - Specifies if the select should be disabled.
 * @prop {boolean} [isCheckbox=false] - If true, the options in the select will be presented as checkboxes.
 * @prop {Option[]} options - Array of options to be displayed in the select. Each option should have a `label` and `value`.
 * @prop ... and all other props supported by `ReactSelect`.
 *
 * Usage:
 *
 * ```tsx
 * import { Select } from 'shared/ui';
 *
 * <Select label="Choose a fruit" options={[{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]} />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - Custom UI components like `DropdownIndicator`, `ErrorIndicator`, `MultiValueRemove`, and `Option` are used to override certain parts of `ReactSelect`'s default behavior.
 * - By default, this select does not allow options to be cleared and does not close the menu on select for multi-selects.
 *
 * Styling:
 * The look and feel of the select can be adjusted via the 'styles.module.scss' file and the 'selectStyles' method. The method 'selectStyles' adjusts the styles based on if checkboxes are used.
 *
 * Accessibility:
 * If an error is provided, an error message will be displayed below the select, with an appropriate ARIA role for accessibility.
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
  isWithBorder?: boolean;
  isIndicatorAllowed?: boolean;
  options: Option[];
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group> & CustomSelectProps
) => {
  const {
    error,
    label,
    disabled,
    name,
    isMulti,
    isCheckbox,
    isWithBorder,
    isIndicatorAllowed = true,
    styles: customStyles,
    ...rest
  } = props;
  return (
    <div
      className={clsx(styles.container, {
        [styles.container__disabled]: disabled,
      })}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <ReactSelect
        {...rest}
        instanceId='t8s-select'
        closeMenuOnSelect={!isMulti}
        styles={selectStyles<Option, IsMulti, Group>(customStyles, isCheckbox, isWithBorder)}
        name={name}
        components={{
          DropdownIndicator: isIndicatorAllowed
            ? error
              ? ErrorIndicator
              : DropdownIndicator
            : () => null,
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
        <p className={styles.error} id={`${name}-error`} role='alert'>
          {error}
        </p>
      )}
    </div>
  );
};
