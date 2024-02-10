import { useGetMe } from '@/entities/session';
import { BadgeIcon, BadgeText, Flex, Typography } from '@/shared/ui';
import { useState } from 'react';
import styles from './fields.module.scss';

export const Education = () => {
  const { data: user } = useGetMe();
  const universities = user?.universities;
  if (!universities) return <Typography>No information</Typography>;
  return (
    <Flex className={styles.work_experience} gap='24px' direction='column'>
      {universities.map((education, i) => {
        const start = new Date(education.admissionDate).getFullYear();
        const end = education.graduationDate
          ? new Date(education.graduationDate).getFullYear()
          : 'Present';
        return (
          <Flex key={i} width={'100%'} justify={'space-between'}>
            <Flex gap={'8px'} direction={'column'}>
              <Typography size={'body_m'}>
                {education.name ?? (education as unknown as { university: string }).university}
              </Typography>
              <Typography color={'greyNormal'} size={'body_s'}>
                {education.degree} in {education.major}
              </Typography>
            </Flex>
            <Typography>
              {start} - {end}
            </Typography>
          </Flex>
        );
      })}
    </Flex>
  );
};
