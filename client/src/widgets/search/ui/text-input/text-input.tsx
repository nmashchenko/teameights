import { FC, useEffect, useState } from 'react';
import styles from './text-input.module.scss';
import { Search } from '@/shared/assets';
import { Flex, Input } from '@/shared/ui';

interface TextInputProps {
  placeholder: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({ defaultValue, placeholder, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setValue(value);
    onChange(value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Flex align='center' className={styles.container}>
      <Input
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        isWithBorder={false}
      />
      <Flex align='center' justify='center' className={styles.search_icon}>
        <Search />
      </Flex>
    </Flex>
  );
};