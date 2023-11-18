import Image from 'next/image';

import { Crown28 } from '@/shared/assets/icons/crowns/crown28';
import styles from './card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';
import { IUserResponse } from '@teameights/types';

interface UserCardProps {
  user: IUserResponse;
  onClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const { fullName, frameworks, isLeader, programmingLanguages, photo } = user;

  // TODO: Delete after Nikita makes the photo the appropriate type
  const fallbackAvatarSrc = '/images/user-images/user-blue.png';

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image src={photo?.path || fallbackAvatarSrc} alt={fullName} width={70} height={70} />
          {isLeader && <Crown28 className={styles.crown} />}
        </div>
        {programmingLanguages && <ProgrammingLanguagesLayout languages={programmingLanguages} />}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{fullName}, 21</div>
        <div className={styles.role}>Developer</div>
      </div>
      {frameworks && <BadgeFrameworksLayout frameworks={frameworks} />}
    </div>
  );
};
