import Image from 'next/image';

import { Crown } from '@/shared/assets/icons/crown';
import styles from './card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';
import { IUserResponse } from '@teameights/types';

interface UserCardProps {
  user: IUserResponse;
  onClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const {
    fullName,
    frameworks,
    isLeader,
    programmingLanguages,
    photo,
  } = user;

  // TODO: Delete after Nikita makes the photo the appropriate type
  const fallbackAvatarSrc = '/images/user-images/user-blue.png';

  return (
    <div onClick={onClick}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {/* <img src={photo || fallbackAvatarSrc} alt={fullName} /> */}
          <Image
            src={photo || fallbackAvatarSrc}
            alt={fullName}
            width={100}
            height={100}
          />
          {isLeader && <Crown className={styles.crown} />}
        </div>
        <div className={styles.content}>
          <div className={styles.name}>
            {/* TODO: Add dateOfBirth property for age counting */}
            {fullName}, 21
          </div>
          <div className={styles.role}>Developer</div>
          {programmingLanguages && (
            <ProgrammingLanguagesLayout languages={programmingLanguages} />
          )}
        </div>
        {frameworks && (
          <BadgeFrameworksLayout frameworks={frameworks} />
        )}
      </div>
    </div>
  );
};
