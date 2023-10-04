import { Crown } from '@/shared/assets';
import { useState, FC, memo } from 'react';
import styles from './info-modal.module.scss';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { Flex } from '@/shared/ui';

interface TeamPersonBoxProps {
  src: string;
  shouldLoadImage: boolean;
  shouldHaveCrown: boolean;
}

const TeamPersonBox: FC<TeamPersonBoxProps> = ({ src, shouldLoadImage, shouldHaveCrown }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Flex direction='column'>
      {shouldLoadImage ? (
        <>
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
            <div className={styles.team_card_picture}>
              <img src={src} alt='Team member image' onLoad={() => setImgLoading(false)} />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.team_card_picture}>
          <img src={src} alt="Team's member image" />
        </div>
      )}
    </Flex>
  );
};

export default memo(TeamPersonBox);
