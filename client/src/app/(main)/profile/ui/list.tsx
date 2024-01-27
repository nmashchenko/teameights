import { useGetMe } from '@/entities/session';
import { Card } from './card';
import { ChecksIcon, TrophyIcon, UserIcon } from '@/shared/assets';
import { Row } from '@/app/(main)/profile/ui/row';

export const List = () => {
  const { data: user } = useGetMe();

  return (
    <Card style={{ width: '40%', gap: '18px' }}>
      <div>
        <Row icon={<UserIcon />} text={user?.speciality ?? ''} />
        <Row icon={<ChecksIcon />} text={user?.experience ?? ''} />
        <Row icon={<ChecksIcon />} text={user?.country ?? ''} />
        <Row icon={<TrophyIcon />} text={String(user?.dateOfBirth) ?? ''} />
      </div>
    </Card>
  );
};
