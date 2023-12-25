import { countries } from '@/shared/constant';
import { Flex, Input, Select, Typography } from '@/shared/ui';
import { useFormContext } from 'react-hook-form';

export const PersonalInfo = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <Flex direction='column' gap='48px' width='370px'>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Location
        </Typography>
        <Select name='country' options={countries} />
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
        <Input type='date' {...register('dateOfBirth', { valueAsDate: true, required: true })} />
      </div>
    </Flex>
  );
};
