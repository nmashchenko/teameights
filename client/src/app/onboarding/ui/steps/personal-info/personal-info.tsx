import { countries } from '@/shared/constant';
import { Flex, Input, InputDate, Select, Typography } from '@/shared/ui';
import { useState } from 'react';

export const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  return (
    <Flex direction='column' gap='48px' width='370px'>
      <div>
        <Select name='country-flag' options={countries} />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Full name
        </Typography>
        <Input name='full-name' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Username
        </Typography>
        <Input name='full-name' value={user} onChange={e => setUser(e.target.value)} />
      </div>
      <div>
        <Typography size='body_s' color='greyNormal'>
          Birthday
        </Typography>
        <InputDate name='data' />
      </div>
    </Flex>
  );
};
