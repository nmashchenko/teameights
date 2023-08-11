'use client';

import clsx from 'clsx';
import { FC, InputHTMLAttributes, useState } from 'react';
import { Eye } from 'shared/assets/Icons/Eye';
import { EyeClosed } from 'shared/assets/Icons/EyeClosed';
import { WarningCircle } from 'shared/assets/Icons/WarningCircle';
import styles from './Input.module.scss';

/**
 * Accepts name, label, error and maxWidth as well as TYPE (passed via default props)
 *
 * If we get error AND type 'password' we would show both icons and paddingRight: '60px', otherwise just one and paddingRight: '32px'
 * 
 * Also accepts maxWidth to limit width:100%
 * 
 * Example of usage:
 *  <Input
      name="1234"
      error="test error"
      maxWidth="200px"
      type="password"
      label="Input password"
    />
 */

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  error?: string;
  maxWidth?: string;
  type?: 'text' | 'password'; // Explicitly limit the type to 'text' or 'password'
}

export const Input: FC<InputProps> = ({
  className,
  name,
  label,
  error,
  maxWidth,
  placeholder,
  disabled,
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    type === 'password' ? false : true
  );

  return (
    <div
      className={clsx(
        styles.wrapper,
        { [styles.wrapper__disabled]: disabled },
        className
      )}
      style={{ maxWidth }}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.input_wrapper}>
        <input
          id={name}
          className={clsx(styles.input, {
            [styles.input_icon]: type === 'password' || error,
            [styles.input_icons]: type === 'password' && error,
          })}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          placeholder={placeholder}
          type={type}
          {...props}
        />
        <div className={styles.indicators}>
          {error && <WarningCircle />}
          {type === 'password' && (
            <div onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <Eye /> : <EyeClosed />}
            </div>
          )}
        </div>
        {error && (
          <span className={styles.error} id={`${name}-error`} role="alert">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
