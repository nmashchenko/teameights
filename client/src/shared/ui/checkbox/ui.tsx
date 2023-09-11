import { clsx } from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { Check } from 'shared/assets';
import styles from './styles.module.scss';

/**
 * Checkbox Component
 *
 * This is a customizable checkbox component with optional label display.
 *
 * Props:
 *
 * @prop {string} [label] - Text that appears next to the checkbox. If not provided, the checkbox will have an aria-label 'Checkbox'.
 * @prop {string} [width] - Custom width for the checkmark icon. Must be passed with a valid Css unit (e.g. '20px').
 * @prop {string} [height] - Custom height for the checkmark icon. Must be passed with a valid Css unit (e.g. '20px').
 * @prop {boolean} [disabled=false] - Whether the checkbox is disabled. Default is false.
 * @prop {function} [onChange] - Event handler to be called when the checkbox value changes.
 * ... and all other props that an <input type="checkbox"> would accept.
 *
 * Usage:
 *
 * ```tsx
 * import { Checkbox } from 'shared/ui';
 *
 * <Checkbox label="Accept terms and conditions" onChange={(e) => handleCheckboxChange(e)} />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - The `Check` component is used to render the checkmark icon when the checkbox is checked.
 *
 */
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  disabled = false,
  label,
  width,
  height,
  className,
  onChange,
  ...props
}) => {
  return (
    <label
      className={clsx(styles.container, { [styles.container__disabled]: disabled }, [className])}
    >
      <input
        type='checkbox'
        className={styles.checkbox}
        disabled={disabled}
        aria-label={label || 'Checkbox'}
        onChange={onChange}
        {...props}
      />
      <span className={styles.checkmark} style={{ width: width, height: height }}>
        <Check />
      </span>
      {label && (
        <span className={clsx(styles.label, { [styles.label__disabled]: disabled })}>{label}</span>
      )}
    </label>
  );
};
