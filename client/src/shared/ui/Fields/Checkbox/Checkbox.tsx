'use client';

import { clsx } from 'clsx';
import { InputHTMLAttributes, useState } from 'react';
import { Check } from 'shared/assets/Icons/Check';
import styles from './Checkbox.module.scss';

/**
 * You can either pass label or not, it will be displayed as regular checkbox or checkbox with text
 */

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  width?: string;
  height?: string;
  isActive?: boolean;
  name: string;
  disabled?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    disabled = false,
    className,
    label,
    width,
    height,
    isActive = false,
  } = props;
  const [checked, setChecked] = useState<boolean>(isActive);

  return (
    <label
      className={clsx(
        styles.Checkbox,
        { [styles.Checkbox__disabled]: disabled },
        [className]
      )}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        disabled={disabled}
        onChange={() => setChecked((prev) => !prev)}
        aria-label={label || 'Checkbox'}
      />
      <span
        className={styles.checkmark}
        style={{ width: width, height: height }}
      >
        <Check />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
