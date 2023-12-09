import { FC, useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import styles from './search-select.module.scss';
import { SearchIcon } from '@/shared/assets';
import { Flex, Select } from '@/shared/ui';
import { IOptionItem } from '../../types';

interface SearchSelectProps {
  defaultValue: MultiValue<IOptionItem>;
  optionsArr: IOptionItem[];
  onChange: (value: MultiValue<IOptionItem>) => void;
  placeholder: string;
  isCheckbox?: boolean;
  menuWrapper?: HTMLElement | null;
}

export const SearchSelect: FC<SearchSelectProps> = ({
  optionsArr,
  defaultValue,
  placeholder,
  onChange,
  isCheckbox = false,
  menuWrapper,
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
        menuIsOpen={menuWrapper ? true : undefined}
        styles={{
          menuList: () => ({
            padding: '8px 0',
            ...(menuWrapper ? { boxShadow: 'none' } : {}),
          }),
          ...(menuWrapper
            ? {
                menu: () => ({
                  background: '#2f3239',
                  maxHeight: 'none',
                  height: '100%',
                  position: 'static',
                }),
                menuPortal: () => ({
                  height: '100%',
                  width: 'auto',
                  position: 'static',
                }),
              }
            : {}),
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
        menuPortalTarget={menuWrapper}
      />
      <Flex align='center' justify='center' className={styles.search_icon_wrapper}>
        <SearchIcon />
      </Flex>
    </Flex>
  );
};
