import { countries } from '@/shared/constant';
import { Flex, Input, Select, Typography } from '@/shared/ui';
import { Controller, useFormContext } from 'react-hook-form';

export const PersonalInfo = () => {
  const {
    register,
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  return (
    <Flex direction='column' gap='48px' width={'100%'} maxWidth='370px'>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Location
        </Typography>
        <Controller
          control={control}
          name='country'
          rules={{ required: 'Name should not be empty.' }}
          render={({ field: { onChange, value, onBlur } }) => (
            <Select
              value={
                countries?.find(s => s.label === value) ?? {
                  value: '',
                  label: '',
                }
              }
              onChange={val => {
                clearErrors('country');
                onChange(val?.label);
              }}
              onBlur={onBlur} // notify when input is touched/blur
              options={countries ?? []}
              error={errors.country?.message as string}
            />
          )}
        />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Full name
        </Typography>
        <Input
          {...register('fullName', {
            required: 'Name should not be empty.',
            minLength: { value: 5, message: 'Should be more than 5 characters' },
            onChange: () => clearErrors('fullName'),
          })}
          error={errors.fullName?.message as string}
        />
      </div>
      {/*TODO: add username validation here from server */}
      <div>
        <Typography size='body_s' color='greyNormal'>
          Username
        </Typography>
        <Input
          {...register('username', {
            required: 'Username should not be empty.',
            minLength: { value: 1, message: 'Should be more than 1 character' },
            onChange: () => clearErrors('username'),
          })}
          error={errors.username?.message as string}
        />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Birthday
        </Typography>
        <Input
          type='date'
          {...register('dateOfBirth', {
            required: 'Date should not be empty.',
            onChange: () => clearErrors('dateOfBirth'),
          })}
          error={errors.dateOfBirth?.message as string}
        />
      </div>
    </Flex>
  );
};
