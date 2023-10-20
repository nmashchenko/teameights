import { FC, useEffect, useState } from 'react';
import styles from './text-input.module.scss';
import { Search } from '@/shared/assets';
import { Input } from '@/shared/ui';

interface TextInputProps {
  placeholder: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = props => {
  const { defaultValue, placeholder, onChange } = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setValue(value);
    onChange(value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={styles.inputWrapper}>
      <Input
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        isWithBorder={false}
      />
      <div className={styles.searchIconWrapper}>
        <Search />
      </div>
    </div>
  );
};
