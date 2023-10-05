import React from 'react';
import { Input, Select } from '@/shared/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

const SearchInput = () => {
  const { register, getValues } = useFormContext();
  const filterIndex = useWatch({
    name: 'currentFilterIndex',
  });

  const currentFilter = getValues(`filtersArr.${filterIndex}`);

  console.log(currentFilter);

  switch (currentFilter.type) {
    case 'text':
      return <Input {...register(`filtersArr.${filterIndex}.filterValue`)} isWithBorder={false} />;

    case 'checkbox':
      return (
        <Controller
          name={`filtersArr.${filterIndex}.filterValue`}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={value => onChange(value)}
              value={value}
              options={getValues(`filtersArr.${filterIndex}.optionsArr`)}
              isWithBorder={false}
              isCheckbox
              isMulti
            />
          )}
        />
      );

    default:
  }
};

export default SearchInput;
