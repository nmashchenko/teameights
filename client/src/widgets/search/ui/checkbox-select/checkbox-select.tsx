import { FC, useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import styles from './checkbox-select.module.scss';
import { Search } from '@/shared/assets';
import { Flex, Select } from '@/shared/ui';
import { IOptionItem } from '../../types';

interface CheckboxSelectProps {
  defaultValue: MultiValue<IOptionItem>;
  optionsArr: IOptionItem[];
  onChange: (value: MultiValue<IOptionItem>) => void;
  placeholder: string;
}

export const CheckboxSelect: FC<CheckboxSelectProps> = props => {
  const { optionsArr, defaultValue, placeholder, onChange } = props;
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (value: MultiValue<IOptionItem> | IOptionItem[]) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Flex align='center' className={styles.inputWrapper}>
      <Select
        value={value}
        controlShouldRenderValue={false}
        placeholder={placeholder}
        options={optionsArr}
        onChange={handleChange}
        isWithBorder={false}
        isIndicatorAllowed={false}
        isCheckbox
        isMulti
      />
      <Flex align='center' justify='center' className={styles.searchIconWrapper}>
        <Search />
      </Flex>
    </Flex>
  );
};
