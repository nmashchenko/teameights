import styles from './user-card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';
import { IUserResponse } from '@teameights/types';
import { calculateAge } from '@/shared/lib';
import { ImageLoader } from '@/shared/ui';
import { CrownIcon28 } from '@/shared/assets';
import { countryFlags } from '@/shared/constant';

interface UserCardProps {
  user: IUserResponse;
  onClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user: { country, photo, skills, isLeader, fullName, role, dateOfBirth },
  onClick,
}) => {
  const years = calculateAge(dateOfBirth);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {/* TODO: Починить это опсле фикса типов с фотками*/}
          <ImageLoader
            borderRadius='5px'
            src={photo?.path ?? ''}
            className={styles.image}
            alt={fullName}
            width={70}
            height={70}
          />
          {isLeader && <CrownIcon28 className={styles.crown} />}
        </div>
        {skills?.programmingLanguages && (
          <ProgrammingLanguagesLayout languages={skills.programmingLanguages} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          {fullName}, {years}
          <ImageLoader src={countryFlags[country] ?? ''} alt={fullName} width={16} height={12} />
        </div>
        <div className={styles.role}>{role.name}</div>
      </div>
      {skills?.frameworks && <BadgeFrameworksLayout frameworks={skills.frameworks} />}
    </div>
  );
};
