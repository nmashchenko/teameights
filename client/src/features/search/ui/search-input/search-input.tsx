import { FC } from 'react';
import { Input, Select } from '@/shared/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

export const SearchInput: FC = () => {
  const { register, getValues } = useFormContext();
  const filterIndex = useWatch({
    name: 'currentFilterIndex',
  });

  const currentFilter = getValues(`filtersArr.${filterIndex}`);

  console.log(currentFilter);

  switch (currentFilter.type) {
    case 'text':
      return <Input {...register(`filtersArr.${filterIndex}.filterValue`)} placeholder={currentFilter.placeholder} isWithBorder={false} />;

    case 'checkbox':
      return (
        <Controller
          name={`filtersArr.${filterIndex}.filterValue`}
          render={({ field: { onChange, value } }) => (
            <Select
              controlShouldRenderValue={false}
              onChange={value => onChange(value)}
              value={value}
              placeholder={currentFilter.placeholder}
              options={getValues(`filtersArr.${filterIndex}.optionsArr`)}
              isWithBorder={false}
              isIndicatorAllowed={false}
              isCheckbox
              isMulti
            />
          )}
        />
      );

    default:
  }
};
