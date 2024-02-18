import { Card } from '../card/card';
import { Star, Cake, MapPin, UserIcon } from '@/shared/assets';
// import { Row } from '@/app/(main)/user/[username]/profile/ui/row';
import { Row } from '../row/row';
import { Flex } from '@/shared/ui';
import { calculateAge } from '@/shared/lib';
import { useParams } from 'next/navigation';
import styles from '../../layout.module.scss';
import { useGetUserByName } from '../../lib/useGetUserByName';

export const List = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);

  let age = '';
  if (user?.dateOfBirth) {
    age = calculateAge(user.dateOfBirth).toString();
  }

  return (
    <Card className={styles.list_card}>
      <Flex direction='column' gap='16px'>
        <Row icon={<UserIcon />} text={user?.skills?.speciality ?? ''} />
        <Row icon={<Star />} text={user?.experience ?? ''} />
        <Row icon={<MapPin />} text={user?.country ?? ''} />
        {age && <Row icon={<Cake />} text={`${age} years old`} />}
      </Flex>
    </Card>
  );
};
