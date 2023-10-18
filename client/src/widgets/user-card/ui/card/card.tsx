import Image from 'next/image';

import LeaderIcon from '../../assets/Crown_28px.svg';
import styles from './card.module.scss';
import { ProgrammingLanguagesLayout } from '../language-layout/language-layout';
import { BadgeFrameworksLayout } from '../frameworks-layout/frameworks-layout';

interface UserCardProps {
  // TODO: Delete all this props
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
  isLeader: boolean;
  //   user: UserType;
}

export const UserCard: React.FC<UserCardProps> = props => {
  // const { user } = props
  // TODO: Delete all this props
  const { image, programmingLanguages, frameworks, isLeader } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top_part}>
          <div className={styles.language_badges}>
            {/* User logo? */}
            <Image
              className={styles.user_logo}
              src={image}
              alt='User avatar'
              width={70}
              height={70}
            />

            {isLeader && (
              <div className={styles.leader_icon}>
                <Image priority src={LeaderIcon} alt='Leader icon' width={26} height={28} />
              </div>
            )}
            <ProgrammingLanguagesLayout languages={programmingLanguages} />
          </div>

          <div className={styles.user_info_container}>
            <div className={styles.user_personal_info}>
              <span className={styles.user_city}>Brooklyn, 21 </span>
              <Image src='https://via.placeholder.com/16x12' alt='Flag' width={16} height={12} />
            </div>
            <div className={styles.user_job}>Developer</div>
          </div>
        </div>

        <BadgeFrameworksLayout badges={frameworks} />
      </div>
    </div>
  );
};
