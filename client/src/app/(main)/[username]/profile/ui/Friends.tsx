import { useGetMe } from '@/entities/session';
import { Card } from './card';

export const Friends = () => {
  const { data: user } = useGetMe();

  return <Card style={{ width: '40%' }}>Team here</Card>;
};
