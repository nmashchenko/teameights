import { InfinityPaginationResultType, IUserResponse } from '@teameights/types';
import { FC } from 'react';
import { Flex } from '@/shared/ui';
import { UserCard } from '@/entities/user';
import styles from './cards.module.scss';
import { CardSkeleton } from '@/shared/ui/skeleton/skeleton';

interface CardsProps {
  users?: InfinityPaginationResultType<IUserResponse>;
  isLoading?: boolean;
}
export const Cards: FC<CardsProps> = ({ users, isLoading }) => {
  return (
    <Flex width='100%' justify='space-evenly' align='center' className={styles.cards_zone}>
      <Flex width='100%' justify='center' align='center' direction='column' margin='0 0 30px 0'>
        <div className={styles.cards}>
          <CardSkeleton cards={9} />
          {/*{users?.data.map(user => <UserCard user={user} />)}*/}
        </div>
      </Flex>
    </Flex>
  );
};
