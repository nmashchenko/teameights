import { Checkbox, Flex, Select, Typography } from '@/shared/ui';
import { SelectableBlock } from '../../shared';
import Image from 'next/image';
import { useState } from 'react';
import { ExperienceProps, experiences, specialities } from '@/shared/constant';
import { principalSpecialities } from './principal-specialities';
import { SingleValue } from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';

export const Specialty = () => {
  const [principalSpeciality, setPrincipalSpeciality] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [checked, setChecked] = useState(false);
  const { setValue, control, getValues } = useFormContext();

  const handlePrincipalSpecialityChange = (speciality: string) => {
    setPrincipalSpeciality(speciality);

    if (speciality !== 'Developer') {
      setValue('speciality', speciality);
    }
  };

  return (
    <Flex direction='column' width='400px'>
      <Flex direction='column' gap='48px' padding='0 0 24px 0'>
        <Flex gap='8px'>
          {principalSpecialities.map(speciality => (
            <SelectableBlock
              text={speciality.name}
              gap='8px'
              padding='8px'
              onClick={() => handlePrincipalSpecialityChange(speciality.name)}
              selected={speciality.name === principalSpeciality}
              key={speciality.name}
            >
              <Image src={speciality.image} alt={speciality.name} width={24} height={24} />
            </SelectableBlock>
          ))}
        </Flex>
        {principalSpeciality === 'Developer' && (
          <div>
            <Typography size='body_s' color='greyNormal'>
              Specialty
            </Typography>
            <Controller
              control={control}
              name='speciality'
              render={({ field: { onChange, value, onBlur } }) => (
                <Select
                  value={specialities.find(s => s.label === value)}
                  onChange={val => onChange(val?.label)}
                  onBlur={onBlur} // notify when input is touched/blur
                  options={specialities.filter(
                    speciality =>
                      speciality.label !== 'Designer' && speciality.label !== 'Project Manager'
                  )}
                />
              )}
            />
          </div>
        )}
        <div>
          <Typography size='body_s' color='greyNormal'>
            Experience
          </Typography>
          <Controller
            control={control}
            name='experience'
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                options={experiences}
                value={experiences.find(s => s.label === value)}
                onChange={val => {
                  onChange(val?.label);
                  setSelectedExperience(val?.label ?? 'No experience');

                  if (val?.value === 'no-experience' || val?.value === 'few-months') {
                    setValue('isLeader', false);
                  }
                }}
                onBlur={onBlur}
              />
            )}
          />
        </div>
        <div>
          <Checkbox
            name='isLeader'
            checked={checked}
            disabled={selectedExperience === 'No experience' || selectedExperience === 'Few months'}
            onChange={() => {
              setChecked(prev => !prev);
              setValue('isLeader', !checked);
              console.log(getValues(), checked);
            }}
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
