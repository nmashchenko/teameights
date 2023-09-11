'use client';

import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { EyeClosed, Eye } from 'shared/assets';
import { Input, InputProps } from '../ui';

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

const InputPasswordComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props },
  ref // Optional ref passed from outside the component
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const SubIcon = () => (
    <div onClick={() => setShowPassword(prev => !prev)}>
      {showPassword ? <Eye /> : <EyeClosed />}
    </div>
  );

  return (
    <Input
      ref={ref} // Pass the ref to the Input component
      subIcon={<SubIcon />}
      subIconPosition='end'
      type={showPassword ? 'text' : 'password'}
      {...props}
    />
  );
};

InputPasswordComponent.displayName = 'InputPassword';

export const InputPassword = forwardRef(InputPasswordComponent);
