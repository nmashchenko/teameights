import { useGetMe } from '@/entities/session';
import { Card } from './card';
import { Flex, Typography } from '@/shared/ui';
import { Github, Google } from '@/shared/assets';

export const About = () => {
  const { data: user } = useGetMe();
  return (
    <Card style={{ width: '60%' }}>
      <Flex direction={'column'} gap={'24px'}>
        <Typography size={'heading_s'} color={'greenBright'}>
          About
        </Typography>
        <Typography size={'body_s'}>{user?.description ?? 'Description'}</Typography>
        <Flex align={'center'} gap={24}>
          <Github width={28} fill={'red'} />
          <Google width={28} fill={'red'} />
        </Flex>
      </Flex>
    </Card>
  );
};
