import { Checkbox, Flex, Select, Typography } from '@/shared/ui';
import { SelectableBlock } from '../../shared';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ExperienceProps, experiences, specialities } from '@/shared/constant';
import { principalSpecialities } from './principal-specialities';
import { SingleValue } from 'react-select';
import { useFormContext } from 'react-hook-form';

export const Specialty = () => {
  const { setValue, getValues } = useFormContext();
  const { specialty } = getValues();
  const [occupation, setOccupation] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState(specialty ?? '');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (selectedSpeciality) {
      setValue('specialty', selectedSpeciality);
    }
    if (selectedExperience) {
      setValue('experience', selectedExperience);
    }
  }, [selectedSpeciality, selectedExperience, setValue]);

  const handleChange = (newValue: SingleValue<ExperienceProps>) => {
    if (newValue) {
      setSelectedExperience(newValue.label);
    }
  };

  const handleSpecialityChange = (newValue: SingleValue<ExperienceProps>) => {
    if (newValue) {
      setSelectedSpeciality(newValue.label);
    }
  };

  useEffect(() => {
    if (occupation === 'Designer' || occupation === 'Manager') {
      setSelectedSpeciality(occupation);
    }
  }, [occupation]);

  return (
    <Flex direction='column' width='400px'>
      <Flex direction='column' gap='48px' padding='0 0 24px 0'>
        <Flex gap='8px'>
          {principalSpecialities.map(speciality => (
            <SelectableBlock
              text={speciality.name}
              gap='8px'
              padding='8px'
              onClick={() => setOccupation(speciality.name)}
              selected={speciality.name === occupation}
              key={speciality.name}
            >
              <Image src={speciality.image} alt={speciality.name} width={24} height={24} />
            </SelectableBlock>
          ))}
        </Flex>
        {occupation === 'Developer' && (
          <div>
            <Typography size='body_s' color='greyNormal'>
              Specialty
            </Typography>
            <Select name='specialty' options={specialities} onChange={handleSpecialityChange} />
          </div>
        )}
        <div>
          <Typography size='body_s' color='greyNormal'>
            Experience
          </Typography>
          <Select name='experience' options={experiences} onChange={handleChange} />
        </div>
        <div>
          <Checkbox
            name='leader'
            checked={checked}
            disabled={selectedExperience === 'No experience' || selectedExperience === 'Few months'}
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
