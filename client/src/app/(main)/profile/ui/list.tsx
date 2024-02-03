import { useGetMe } from '@/entities/session';
import { Card } from './card';
import { Star, Cake, MapPin, UserIcon } from '@/shared/assets';
import { Row } from '@/app/(main)/profile/ui/row';
import { Flex } from '@/shared/ui';

export const List = () => {
  const { data: user } = useGetMe();

  return (
    <Card style={{ width: '40%', gap: '18px' }}>
      <Flex direction='column' gap="16px">
        <Row icon={<UserIcon />} text={user?.speciality ?? ''} />
        <Row icon={<Star />} text={user?.experience ?? ''} />
        <Row icon={<MapPin />} text={user?.country ?? ''} />
        <Row icon={<Cake />} text={String(user?.dateOfBirth) ?? ''} />
      </Flex>
    </Card>
  );
};
