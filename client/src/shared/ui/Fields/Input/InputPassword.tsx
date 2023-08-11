'use client';

import { FC, useState } from 'react';
import { Eye } from 'shared/assets/Icons/Eye';
import { EyeClosed } from 'shared/assets/Icons/EyeClosed';
import { Input, InputProps } from './Input';

/**
 * Accepts all props of @InputProps but is used for password fields
 * 
 * Read more about @Input at shared/ui/Fields/Input/Input.tsx
 * 
 * Example of usage:
 *  <InputPassword
      name="password"
      error="test error"
      maxWidth="200px"
      label="Input password"
    />
 */

export const InputPassword: FC<InputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const SubIcon = () => (
    <div onClick={() => setShowPassword((prev) => !prev)}>
      {showPassword ? <Eye /> : <EyeClosed />}
    </div>
  );

  return (
    <Input
      subIcon={<SubIcon />}
      subIconPosition="end"
      type={showPassword ? 'text' : 'password'}
      {...props}
    />
  );
};
