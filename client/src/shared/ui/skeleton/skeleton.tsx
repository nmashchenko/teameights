import Skeleton from 'react-loading-skeleton';
import { FC, PropsWithChildren } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { Flex } from '@/shared/ui';

interface CardSkeletonProps {
  cards: number;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <Flex justify='center' align='center'>
      {children}
    </Flex>
  );
}

export const CardSkeleton: FC<CardSkeletonProps> = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <Skeleton
        key={i}
        wrapper={Box}
        baseColor='#313131'
        highlightColor='#525252'
        width={230}
        height={280}
        borderRadius={15}
      />
    ));
};
