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

export const UserCard: React.FC<UserCardProps> = ({
  user: { photo, programmingLanguages, frameworks, isLeader, fullName, role, dateOfBirth },
  onClick,
}) => {
  console.log('@date', dateOfBirth);
  console.log('@user.photo', photo);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Image src={photo.path} className={styles.image} alt={fullName} width={70} height={70} />
          {isLeader && <Crown28 className={styles.crown} />}
        </div>
        {programmingLanguages && <ProgrammingLanguagesLayout languages={programmingLanguages} />}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{fullName}, 21</div>
        <div className={styles.role}>{role.name}</div>
      </div>
      {frameworks && <BadgeFrameworksLayout frameworks={frameworks} />}
    </div>
  );
};
