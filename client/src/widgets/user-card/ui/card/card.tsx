import Image from 'next/image';

import { Crown } from '@/shared/assets/icons/crown';
import styles from './card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';
import { IUserResponse } from '@teameights/types';

interface UserCardProps {
  user: IUserResponse;
}

export const UserCard: React.FC<UserCardProps> = props => {
  const {
    user: { fullName, frameworks, isLeader, programmingLanguages, photo },
  } = props;

  // TODO: Delete after Nikita makes the photo the appropriate type
  const fallbackAvatarSrc = '/images/user-images/user-blue.png';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top_part}>
          <div className={styles.language_badges}>
            <Image
              className={styles.user_logo}
              src={photo?.path || fallbackAvatarSrc}
              alt='User avatar'
              width={70}
              height={70}
            />

            {isLeader && (
              <div className={styles.leader_icon_wrapper}>
                <Crown width="26px" height="28px" />
              </div>
            )}
            {programmingLanguages && (
              <ProgrammingLanguagesLayout languages={programmingLanguages} />
            )}
          </div>

          <div className={styles.user_info_container}>
            <div className={styles.user_personal_info}>
              {/* TODO: Add dateOfBirth property for age counting */}
              <span className={styles.user_city}>{fullName}, 21 </span>
              <Image src='https://via.placeholder.com/16x12' alt='Flag' width={16} height={12} />
            </div>
            <div className={styles.user_job}>Developer</div>
          </div>
        </div>

        {frameworks && <BadgeFrameworksLayout frameworks={frameworks} />}
      </div>
    </div>
  );
};
