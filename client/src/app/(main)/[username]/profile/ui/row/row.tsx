import { ReactNode } from 'react';
import { Flex, Typography } from '@/shared/ui';

interface RowProps {
  icon: ReactNode;
  text: string;
}

export const Row = ({ icon, text }: RowProps) => {
  return (
    <Flex align={'center'} gap={'8px'}>
      <div>{icon}</div>
      <Typography>{text}</Typography>
    </Flex>
  );
};
