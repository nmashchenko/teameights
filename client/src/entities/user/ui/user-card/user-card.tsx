import Image from 'next/image';

import { Crown28 } from '@/shared/assets';
import styles from './user-card.module.scss';
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
  const years = calculateAge(dateOfBirth);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {/* TODO: Починить это опсле фикса типов с фотками*/}
          <Image src={photo!.path} className={styles.image} alt={fullName} width={70} height={70} />
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
