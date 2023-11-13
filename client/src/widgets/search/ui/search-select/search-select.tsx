import { FC, useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import styles from './search-select.module.scss';
import { Search } from '@/shared/assets';
import { Flex, Select } from '@/shared/ui';
import { IOptionItem } from '../../types';

interface SearchSelectProps {
  defaultValue: MultiValue<IOptionItem>;
  optionsArr: IOptionItem[];
  onChange: (value: MultiValue<IOptionItem>) => void;
  placeholder: string;
  isCheckbox?: boolean;
}

export const SearchSelect: FC<SearchSelectProps> = ({
  optionsArr,
  defaultValue,
  placeholder,
  onChange,
  isCheckbox = false,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (value: MultiValue<IOptionItem> | IOptionItem[]) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Flex align='center' className={styles.container}>
      <Select
        className={styles.select}
        styles={{
          menuList: () => ({
            padding: '8px 0',
          }),
        }}
        classNames={{
          menuList: () => styles.menu_list,
        }}
        value={value}
        controlShouldRenderValue={false}
        placeholder={placeholder}
        options={optionsArr}
        onChange={handleChange}
        isWithBorder={false}
        isIndicatorAllowed={false}
        isCheckbox={isCheckbox}
        isMulti
      />
      <Flex align='center' justify='center' className={styles.search_icon_wrapper}>
        <Search />
      </Flex>
    </Flex>
  );
};