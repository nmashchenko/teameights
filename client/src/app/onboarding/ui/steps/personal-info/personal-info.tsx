import { countries } from '@/shared/constant';
import { Flex, Input, InputDate, Select } from '@/shared/ui';
import { useState } from 'react';

export const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  return (
    <Flex direction='column' gap='48px'>
      <div style={{ width: '370px' }}>
        <Select name='country-flag' options={countries} />
      </div>
      <div style={{ color: 'gray' }}>
        <p>Full Name</p>
        <Input name='full-name' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div style={{ color: 'gray' }}>
        <p>Username</p>
        <Input name='full-name' value={user} onChange={e => setUser(e.target.value)} />
      </div>
      <div style={{ color: 'gray' }}>
        <p>Birthday</p>
        <InputDate name='data' />
      </div>
    </Flex>
  );
};
