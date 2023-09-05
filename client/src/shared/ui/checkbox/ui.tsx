import { clsx } from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { Check } from 'shared/assets/Icons/Check';
import styles from './styles.module.scss';

/**
 * You can either pass label or not, it will be displayed as regular checkbox or checkbox with text
 *
 * Example of usage:
 * <Checkbox name="123" label="Label" disabled checked={checked} onChange={() => setChecked(!checked)} />
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
