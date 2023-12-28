import { countries, focuses } from '@/shared/constant';
import { Flex, Input, Select, Typography } from '@/shared/ui';
import { Controller, useFormContext } from 'react-hook-form';

export const PersonalInfo = () => {
  const { register, control } = useFormContext();

  return (
    <Flex direction='column' gap='48px' width='370px'>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Location
        </Typography>
        <Controller
          control={control}
          name='country'
          render={({ field: { onChange, value, onBlur } }) => (
            <Select
              value={
                countries?.find(s => s.label === value) ?? {
                  value: '',
                  label: '',
                }
              }
              onChange={val => onChange(val?.label)}
              onBlur={onBlur} // notify when input is touched/blur
              options={countries ?? []}
            />
          )}
        />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Full name
        </Typography>
        <Input {...register('fullName')} />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Username
        </Typography>
        <Input {...register('username')} />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Birthday
        </Typography>
        <Input type='date' {...register('dateOfBirth')} />
      </div>
    </Flex>
  );
};
