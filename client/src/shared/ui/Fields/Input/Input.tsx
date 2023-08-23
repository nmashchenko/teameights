import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { WarningCircle } from 'shared/assets/Icons/WarningCircle';
import styles from './Input.module.scss';

/**
 * Requires @name, @value (used to control input), @onChange (used to control input change)
 * Not required: @label (will be displayed on top), @className , @error , @maxWidth , @type , @subIcon , @subIconPosition
 * 
 * @subIconPosition is used to place additional icon you want in the 'start' | 'end'
 * @subIcon is the actual subIcon you want to place
 * 
 * Example of usage:
 *  <Input
      name="input"
      error="test error"
      maxWidth="200px"
      label="Input password"
    />
 */

type IconPosition = 'start' | 'end';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  maxWidth?: string;
  subIconPosition?: IconPosition;
  subIcon?: JSX.Element;
}

export const Input: FC<InputProps> = ({
  className,
  name,
  label,
  error,
  maxWidth,
  placeholder,
  disabled,
  subIconPosition = 'end',
  subIcon,
  ...props
}) => {
  const hasSubIcon = Boolean(subIcon);
  const isSubIconEnd = hasSubIcon && subIconPosition === 'end';

  const renderErrorIcon = () => (
    <div className={styles.error_icon}>
      <WarningCircle />
    </div>
  );

  const renderSubIcon = () => (
    <div
      className={clsx(styles.sub_icon, {
        [styles.sub_icon__start]: subIconPosition === 'start',
        [styles.sub_icon__two_icons_end]:
          subIcon && subIconPosition === 'end' && error,
      })}
    >
      {subIcon}
    </div>
  );

  return (
    <div
      className={clsx(
        styles.container,
        { [styles.container__disabled]: disabled },
        [className]
      )}
      style={{ maxWidth: maxWidth }}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.input_container}>
        <input
          name={name}
          className={clsx(styles.input, {
            [styles.input__icon_start]:
              hasSubIcon && subIconPosition === 'start',
            [styles.input__icon_end]: isSubIconEnd || error,
            [styles.input__two_icons_end]: isSubIconEnd && error,
          })}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          placeholder={placeholder}
          {...props}
        />
        {error && renderErrorIcon()}
        {subIcon && renderSubIcon()}
        {error && (
          <span className={styles.error} id={`${name}-error`} role="alert">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
