import { Crown } from '../../../shared/assets/icons/crown';
import { useState, FC, memo } from 'react';
import styles from './info-modal.module.scss';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';

interface TeamPersonBoxProps {
  src: string;
  shouldLoadImage: boolean;
  shouldHaveCrown: boolean;
}

const TeamPersonBox: FC<TeamPersonBoxProps> = ({ src, shouldLoadImage, shouldHaveCrown }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className={styles.team_card_person}>
      {shouldLoadImage ? (
        <>
          <div
            className={styles.hidable_wrapper}
            style={{ display: imgLoading ? 'block' : 'none' }}
          >
            {shouldHaveCrown && (
              <div className={styles.crown_container}>
                <Crown />
              </div>
            )}
            <Skeleton width='50px' height='50px' borderRadius='50%' />
          </div>
          <div
            className={styles.hidable_wrapper}
            style={{ display: imgLoading ? 'none' : 'block' }}
          >
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
    </div>
  );
};

export default memo(TeamPersonBox);
