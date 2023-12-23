import { InfinityPaginationResultType, IUserResponse } from '@teameights/types';
import { FC, useCallback, useRef, useState } from 'react';
import { Flex, CardSkeleton } from '@/shared/ui';
import { UserCard } from '@/entities/user';
import styles from './cards.module.scss';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/query-core';

interface CardsProps {
  data?: InfiniteData<InfinityPaginationResultType<IUserResponse>>;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<Readonly<{ data: IUserResponse[]; hasNextPage: boolean }>, unknown>,
      Error
    >
  >;
}
export const Cards: FC<CardsProps> = ({
  data,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}) => {
  const intObserver = useRef<IntersectionObserver>();
  const [isNotFound, setIsNotFound] = useState(false);

  const lastUserRef = useCallback(
    (user: HTMLDivElement) => {
      if (isFetchingNextPage) {
        return;
      }

      if (intObserver.current) {
        intObserver.current.disconnect();
      }

      intObserver.current = new IntersectionObserver(
        usersPerPage => {
          if (usersPerPage[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 0.9 }
      );

      if (user) {
        intObserver.current.observe(user);
      }
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const content = data?.pages.map(pg => {
    const usersPerPage = pg.data;

    return usersPerPage.map((user, index) => {
      if (usersPerPage.length === index + 1) {
        return <UserCard user={user} key={index} ref={lastUserRef} />;
      }

      return <UserCard user={user} key={index} />;
    });
  });
  return (
    <Flex width='100%' justify='space-evenly' align='center' className={styles.cards_zone}>
      <Flex width='100%' justify='center' align='center' direction='column' margin='0 0 30px 0'>
        <div className={styles.cards}>
          {content}
          {(isLoading || isFetchingNextPage) && <CardSkeleton cards={9} />}
        </div>
      </Flex>
    </Flex>
  );
};
