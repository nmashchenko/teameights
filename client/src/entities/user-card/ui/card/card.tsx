import Image from 'next/image';

import { Crown28 } from '@/shared/assets/icons/crowns/crown28';
import styles from './card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';
import { IUserResponse } from '@teameights/types';
import { calculateAge } from '@/shared/lib';

interface UserCardProps {
  user: IUserResponse;
  onClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user: { photo, programmingLanguages, frameworks, isLeader, fullName, role, dateOfBirth },
  onClick,
}) => {
  // TODO: Delete after Nikita makes the photo the appropriate type
  const fallbackAvatarSrc = '/images/user-images/user-blue.png';

  console.log('@DateOfBirth', dateOfBirth);
  console.log('@Age', calculateAge(dateOfBirth));

  const years = calculateAge(dateOfBirth);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image
            src={photo!.path || fallbackAvatarSrc}
            className={styles.image}
            alt={fullName}
            width={70}
            height={70}
          />
          {isLeader && <Crown28 className={styles.crown} />}
        </div>
        {programmingLanguages && <ProgrammingLanguagesLayout languages={programmingLanguages} />}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          {fullName}, {years}
        </div>
        <div className={styles.role}>{role.name}</div>
      </div>
      {frameworks && <BadgeFrameworksLayout frameworks={frameworks} />}
    </div>
  );
};
