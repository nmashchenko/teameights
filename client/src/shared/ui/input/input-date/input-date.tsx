'use client';

import { ChangeEvent, forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { Input, InputProps } from '../input/input';

/**
 * Accepts @InputDateProps which doesn't allow you to pass @value and @onChange
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

export interface InputDateProps extends Omit<InputProps, 'value' | 'onChange' | 'placeholder'> {}

const InputDateComponent: ForwardRefRenderFunction<HTMLInputElement, InputDateProps> = (
  { ...props },
  ref // Optional ref passed from outside the component
) => {
  const [date, setDate] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/\D/g, '');

    let formattedDate = '';

    if (numbersOnly.length <= 2) {
      formattedDate = numbersOnly;
    } else if (numbersOnly.length <= 4) {
      formattedDate = numbersOnly.slice(0, 2) + '/' + numbersOnly.slice(2);
    } else if (numbersOnly.length > 4) {
      formattedDate =
        numbersOnly.slice(0, 2) + '/' + numbersOnly.slice(2, 4) + '/' + numbersOnly.slice(4, 8);
    }

    // Restrict the date to a maximum of 8 digits
    if (formattedDate.length <= 10) {
      setDate(formattedDate);
    }
  };

  return (
    <Input
      ref={ref} // Pass the ref to the Input component
      value={date}
      onChange={handleChange}
      placeholder='DD/MM/YYYY'
      maxLength={10}
      {...props}
    />
  );
};

InputDateComponent.displayName = 'InputDate';

export const InputDate = forwardRef(InputDateComponent);
