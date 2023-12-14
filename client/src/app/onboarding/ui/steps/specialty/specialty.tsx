import { Checkbox, Flex, Select, Typography } from '@/shared/ui';
import { SpecialtySelect } from './ui/specialty-select';
import Image from 'next/image';
import { specialities } from '@/shared/constant';
import { useState } from 'react';

export const Specialty = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Flex direction='column' width='400px'>
      <Flex direction='column' gap='48px' padding='0 0 24px 0'>
        <Flex gap='8px'>
          <SpecialtySelect PlatformText='Developer'>
            <Image src='/images/technologist.png' alt='technologist' width={24} height={24} />
          </SpecialtySelect>
          <SpecialtySelect PlatformText='Designer'>
            <Image src='/images/artist.png' alt='artist' width={24} height={24} />
          </SpecialtySelect>
          <SpecialtySelect PlatformText='Manager'>
            <Image src='/images/office-worker.png' alt='office-worker' width={24} height={24} />
          </SpecialtySelect>
        </Flex>
        <div>
          <Typography size='body_s' color='greyNormal'>
            Specialty
          </Typography>
          <Select name='specialty' options={specialities} />
        </div>
        <div>
          {/* Replace with experience from the backend */}
          <Typography size='body_s' color='greyNormal'>
            Experience
          </Typography>
          <Select name='experience' options={specialities} />
        </div>
        <div>
          <Checkbox
            name='123'
            checked={checked}
            onChange={() => setChecked(prev => !prev)}
            label={'I want to be a leader of the team'}
          />
        </div>
      </Flex>
      <div>
        <Typography size='body_m' color='greyNormal'>
          Leaders typically have 1+ years of experience and will be required to pass a leadership
          test.
        </Typography>
      </div>
    </Flex>
  );
};
