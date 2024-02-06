import clsx from 'clsx';
import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { WarningCircleIcon } from '@/shared/assets';
import styles from './input.module.scss';

/**
 * `Input` Component.
 *
 * An input component that provides enhanced features such as displaying errors, custom icons, etc.
 * This component also supports ref forwarding to the underlying input element.
 *
 * Props:
 * - `name`: Identifier for the input. Required for form submission and setting the label's 'for' attribute.
 * - `label`: Text to display above the input.
 * - `error`: Error message to display beneath the input.
 * - `maxWidth`: Maximum width for the input container.
 * - `subIconPosition`: Position of the additional icon ('start' or 'end').
 * - `subIcon`: JSX element of the additional icon to display.
 * - ...all standard `InputHTMLAttributes<HTMLInputElement>` props.
 *
 * Usage:
 * ```tsx
 *  <Input
 *    name="input"
 *    error="test error"
 *    maxWidth="200px"
 *    label="Input password"
 *  />
 * ```
 *
 * To access the underlying input element directly:
 * ```tsx
 * const inputRef = useRef<HTMLInputElement>(null);
 * <Input ref={inputRef} name="[username]" label="Username" />
 * ```
 *
 */

type IconPosition = 'start' | 'end';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  maxWidth?: string;
  subIconPosition?: IconPosition;
  subIcon?: JSX.Element;
  isWithBorder?: boolean;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref // Optional ref passed from outside the component
) => {
  const {
    className,
    name,
    label,
    error,
    maxWidth,
    placeholder,
    disabled,
    subIconPosition = 'end',
    subIcon,
    isWithBorder = true,
    ...rest
  } = props;

  return (
    <div
      className={clsx(styles.container, { [styles.container__disabled]: disabled }, className)}
      style={{ maxWidth }}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.input_container}>
        <input
          ref={ref}
          name={name}
          className={clsx(styles.input, {
            [styles.input__icon_start]: subIcon && subIconPosition === 'start',
            [styles.input__icon_end]: (subIcon && subIconPosition === 'end') || error,
            [styles.input__two_icons_end]: subIcon && subIconPosition === 'end' && error,
            [styles.input__withBorder]: isWithBorder,
          })}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          placeholder={placeholder}
          {...rest}
        />
        {error && (
          <div className={styles.error_icon}>
            <WarningCircleIcon />
          </div>
        )}
        {subIcon && (
          <div
            className={clsx(styles.sub_icon, {
              [styles.sub_icon__start]: subIconPosition === 'start',
              [styles.sub_icon__two_icons_end]: subIcon && subIconPosition === 'end' && error,
            })}
          >
            {subIcon}
          </div>
        )}
        {error && (
          <span className={styles.error} id={`${name}-error`} role='alert'>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

InputComponent.displayName = 'Input';

export const Input = forwardRef(InputComponent);
