import { Flex } from '@/shared/ui';
import { FC, memo, useState } from 'react';
import styles from './team-modal-phone.module.scss';
import { Crown } from '@/shared/assets';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

interface TeamMemberProps {
  shouldHaveCrown: boolean;
  src: string;
}

const TeamMember: FC<TeamMemberProps> = ({ shouldHaveCrown = false, src }) => {
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <Flex>
      <div className={imgLoading ? styles.visible_container : styles.hidden_container}>
        {shouldHaveCrown && (
          <div className={styles.crown_container}>
            <Crown />
          </div>
        )}
        <Skeleton width='50px' height='50px' borderRadius='50%' />
      </div>
      <div className={imgLoading ? styles.hidden_container : styles.visible_container}>
        {shouldHaveCrown && (
          <div className={styles.crown_container}>
            <Crown />
          </div>
        )}
        <div className={styles.user_img}>
          <img src={src} alt='Team member image' onLoad={() => setImgLoading(false)} />
        </div>
      </div>
    </Flex>
  );
};

export default memo(TeamMember);
