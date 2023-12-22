import styles from './skeleton.module.scss';
import Skeleton from 'react-loading-skeleton';
import { FC, PropsWithChildren } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

interface CardSkeletonProps {
  cards: number;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}

export const CardSkeleton: FC<CardSkeletonProps> = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <Skeleton
        wrapper={Box}
        baseColor='#313131'
        highlightColor='#525252'
        width={230}
        height={280}
        borderRadius={25}
      />
    ));
};
