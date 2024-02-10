import { useGetFriends, useGetMe } from '@/entities/session';
import { Card } from './card';

export const Friends = () => {
  const { data: user } = useGetMe();

  const mockFriends = { data: [] };

  return <Card style={{ width: '40%' }}>Friends here</Card>;
};
