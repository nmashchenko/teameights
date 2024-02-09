import { useGetMe } from '@/entities/session';
import { Card } from './card';
import { Star, Cake, MapPin, UserIcon } from '@/shared/assets';
// import { Row } from '@/app/(main)/user/[username]/profile/ui/row';
import { Row } from "./row"
import { Flex } from '@/shared/ui';
import { calculateAge } from '@/shared/lib';

export const List = () => {
  const { data: user } = useGetMe();

  let age = "";
  if (user?.dateOfBirth) {
    age = (calculateAge(user.dateOfBirth)).toString();
  }

  return (
    <Card style={{ width: '40%', gap: '18px' }}>
      <Flex direction='column' gap="16px">
        <Row icon={<UserIcon />} text={user?.speciality ?? ''} />
        <Row icon={<Star />} text={user?.experience ?? ''} />
        <Row icon={<MapPin />} text={user?.country ?? ''} />
        {age && <Row icon={<Cake />} text={age} /> }
      </Flex>
    </Card>
  );
};