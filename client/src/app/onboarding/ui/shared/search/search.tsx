import { Flex, Input } from '@/shared/ui';
import styles from './search.module.scss';
import { useState, useEffect } from 'react';
import { SearchIcon } from '@/shared/assets';

interface TextInputProps {
  placeholder: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export const Search = ({ defaultValue, onChange, placeholder }: TextInputProps) => {
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
        <SearchIcon />
      </Flex>
    </Flex>
  );
};
