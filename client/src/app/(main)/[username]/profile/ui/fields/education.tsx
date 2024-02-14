import { Flex, Typography } from '@/shared/ui';
import { useParams } from 'next/navigation';
import { useGetUserByName } from '../../lib/useGetUserByName';

export const Education = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);
  const universities = user?.universities;
  if (!universities) return <Typography>No information</Typography>;
  return (
    <Flex gap='24px' direction='column'>
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
