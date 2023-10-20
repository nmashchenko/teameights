import { FC, useEffect, useState } from 'react';
import styles from './checkbox-select.module.scss';
import { Search } from '@/shared/assets';
import { Select } from '@/shared/ui';
import { IOptionItem } from '../../types';
import { MultiValue } from 'react-select';

interface TextInputProps {
  defaultValue: MultiValue<IOptionItem>;
  optionsArr: IOptionItem[];
  onChange: (value: MultiValue<IOptionItem>) => void;
  placeholder: string;
}

export const CheckboxSelect: FC<TextInputProps> = props => {
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
    <div className={styles.inputWrapper}>
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
      <div className={styles.searchIconWrapper}>
        <Search />
      </div>
    </div>
  );
};
