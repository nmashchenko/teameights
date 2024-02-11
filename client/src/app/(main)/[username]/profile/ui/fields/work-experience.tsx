import { useGetMe } from '@/entities/session';
import { Flex, Typography } from '@/shared/ui';
export const WorkExperience = () => {
  const { data: user } = useGetMe();
  const jobs = user?.jobs;
  return (
    <Flex gap='24px' direction='column'>
      {jobs?.map((job, i: number) => {
        const start = new Date(job.startDate).getFullYear();
        const end = job.endDate ? new Date(job.endDate).getFullYear() : 'Present';
        return (
          <Flex key={i} width={'100%'} justify={'space-between'}>
            <Flex gap={'8px'} direction={'column'}>
              <Typography size={'body_m'}>{job.company}</Typography>
              <Typography color={'greyNormal'} size={'body_s'}>
                {job.title}
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
