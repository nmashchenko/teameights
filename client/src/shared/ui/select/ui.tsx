'use client';

import type { GroupBase, Props } from 'react-select';
import ReactSelect from 'react-select';
import clsx from 'clsx';

import { selectStyles } from './lib/selectStyles';
import { DropdownIndicator } from './ui/dropdown-indicator';
import { ErrorIndicator } from './ui/error-indicator';
import { MultiValueRemove } from './ui/multi-value-remove';
import { Option } from './ui/option';

import styles from './styles.module.scss';
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

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProperties {
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
  disabled,
  error,
  isCheckbox = false,
  isMulti,
  label,
  name,
  ...properties
}: Props<Option, IsMulti, Group> & CustomSelectProperties) => (
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
      {...properties}
      instanceId='t8s-select'
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
      menuPortalTarget={typeof window === 'undefined' ? null : document.body}
    />
    {error && (
      <p className={styles.error} id={`${name}-error`} role='alert'>
        {error}
      </p>
    )}
  </div>
);