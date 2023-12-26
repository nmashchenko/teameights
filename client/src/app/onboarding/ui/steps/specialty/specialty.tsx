import { Checkbox, Flex, Select, Typography } from '@/shared/ui';
import Image from 'next/image';
import { useState } from 'react';
import { experiences, focuses } from '@/shared/constant';
import { principalSpecialities } from './principal-specialities';
import { Controller, useFormContext } from 'react-hook-form';
import styles from './speciality.module.scss';

export const Specialty = () => {
  const [selectedExperience, setSelectedExperience] = useState('');
  const [checked, setChecked] = useState(false);
  const { setValue, control, getValues, register, watch } = useFormContext();

  const principalSpeciality = watch('speciality');
  const handlePrincipalSpecialityChange = (speciality: string) => {
    setValue('focus', '');
  };

  return (
    <Flex direction='column' width='400px'>
      <Flex direction='column' gap='48px' padding='0 0 24px 0'>
        <Flex gap='8px'>
          {principalSpecialities.map(speciality => (
            <Flex width={"33%"} key={speciality.name}>
              <input
                type='radio'
                id={speciality.name}
                className={styles.input}
                onClick={() => handlePrincipalSpecialityChange(speciality.name)}
                value={speciality.name}
                {...register('speciality')}
              />
              <label htmlFor={speciality.name} className={styles.label}>
                <Image src={speciality.image} alt={speciality.name} width={24} height={24} />
                {speciality.name}
              </label>
            </Flex>
          ))}
        </Flex>
        {principalSpeciality && (
          <div>
            <Typography size='body_s' color='greyNormal'>
              Focus
            </Typography>
            <Controller
              control={control}
              name='focus'
              render={({ field: { onChange, value, onBlur } }) => (
                <Select
                  value={
                    focuses[principalSpeciality]?.find(s => s.label === value) ?? {
                      value: '',
                      label: '',
                    }
                  }
                  onChange={val => onChange(val?.label)}
                  onBlur={onBlur} // notify when input is touched/blur
                  options={focuses[principalSpeciality] ?? []}
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
            checked={checked}
            disabled={selectedExperience === 'No experience' || selectedExperience === 'Few months'}
            label={'I want to be a leader of the team'}
            onClick={() => setChecked(prev => !prev)}
            {...register('isLeader')}
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
