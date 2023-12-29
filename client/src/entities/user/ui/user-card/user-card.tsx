import styles from './user-card.module.scss';
import { IUserResponse } from '@teameights/types';
import { calculateAge } from '@/shared/lib';
import { ImageLoader } from '@/shared/ui';
import { CrownIcon28 } from '@/shared/assets';
import { countryFlags } from '@/shared/constant';
import { forwardRef } from 'react';
import { IconLayout } from '../icon-layout/icon-layout';
import { TextLayout } from '../text-layout/text-layout';

interface UserCardProps {
  user: IUserResponse;
  onClick?: () => void;
}

export const UserCard = forwardRef<HTMLDivElement, UserCardProps>(
  ({ user: { country, photo, skills, isLeader, fullName, dateOfBirth }, onClick }, ref) => {
    const years = calculateAge(dateOfBirth);

    return (
      <div className={styles.card} onClick={onClick} ref={ref}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <ImageLoader
              borderRadius='5px'
              src={photo?.path ?? '/images/placeholder.png'}
              className={styles.image}
              alt={fullName}
              width={70}
              height={70}
            />
            {isLeader && <CrownIcon28 className={styles.crown} />}
          </div>
          {skills?.coreTools && <IconLayout icons={skills?.coreTools} />}
        </div>
        <div className={styles.content}>
          <div className={styles.name}>
            {fullName}, {years}
            <ImageLoader
              src={countryFlags[country] ?? '/images/placeholder.png'}
              alt={fullName}
              width={16}
              height={12}
            />
          </div>
          <div className={styles.speciality}>{skills?.speciality}</div>
        </div>
        {skills?.additionalTools && <TextLayout texts={skills.additionalTools} />}
      </div>
    );
  }
);
