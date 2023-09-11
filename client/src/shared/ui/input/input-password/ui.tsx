'use client';

import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useState } from 'react';
import { Eye, EyeClosed } from 'shared/assets';

import type { InputProps as InputProperties } from '../ui';
import { Input } from '../ui';

/**
 * Accepts all props of @InputProps but is used for password fields
 *
 * Read more about @Input at shared/ui/Fields/Input/Input.tsx
 *
 * Example of usage:
 *  <InputPassword
 *    name="password"
 *    error="test error"
 *    maxWidth="200px"
 *    label="Input password"
 *  />
 */

const InputPasswordComponent: ForwardRefRenderFunction<HTMLInputElement, InputProperties> = (
  { ...properties },
  reference // Optional ref passed from outside the component
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const SubIcon = () => (
    <div onClick={() => setShowPassword(previous => !previous)}>
      {showPassword ? <Eye /> : <EyeClosed />}
    </div>
  );

  return (
    <Input
      ref={reference} // Pass the ref to the Input component
      subIcon={<SubIcon />}
      subIconPosition='end'
      type={showPassword ? 'text' : 'password'}
      {...properties}
    />
  );
};

InputPasswordComponent.displayName = 'InputPassword';

export const InputPassword = forwardRef(InputPasswordComponent);
