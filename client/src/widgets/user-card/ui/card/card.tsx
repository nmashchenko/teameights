import { FC } from 'react';
import Image from 'next/image';

import { BadgeFramework, BadgeLanguage } from '@/shared/ui';

import LeaderIcon from '../../assets/Crown_28px.svg';
import styles from './card.module.scss';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
  isLeader: boolean;
}

export const UserCard: FC<UserCardProps> = props => {
  const { image, programmingLanguages, frameworks, isLeader } = props;

  const programmingLanguagesAmount = programmingLanguages.length;
  const frameworksAmount = frameworks.length;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top_part}>
          <div className={styles.language_badges}>
            <Image className={styles.user_logo} src={image} alt='' width={70} height={70} />
            {isLeader ? (
              <div className={styles.leader_icon}>
                <Image priority src={LeaderIcon} alt='Leader icon' width={26} height={28} />
              </div>
            ) : (
              ''
            )}
            <div className={styles.languagesContainer}>
              {programmingLanguagesAmount <= 2 ? (
                programmingLanguages
                  .slice(0, programmingLanguagesAmount < 2 ? programmingLanguagesAmount : 2)
                  .map((item, id) => <BadgeLanguage data={item} key={id} />)
              ) : programmingLanguagesAmount > 2 ? (
                programmingLanguages
                  .slice(0, programmingLanguagesAmount < 2 ? programmingLanguagesAmount : 1)
                  .map((item, id) => <BadgeLanguage data={item} key={id} />)
              ) : (
                <div></div>
              )}
              {programmingLanguagesAmount > 2 ? (
                <BadgeLanguage isAndMore={true} andMoreAmount={programmingLanguagesAmount - 1} />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={styles.user_info_container}>
            <div className={styles.user_personal_info}>
              <div className={styles.user_city}>Brooklyn, 21 </div>
              <Image src='https://via.placeholder.com/16x12' alt='' width={16} height={12} />
            </div>
            <div className={styles.user_job}>Developer</div>
          </div>
        </div>

        <div className={styles.frameworksContainer}>
          {frameworks
            .slice(0, programmingLanguagesAmount < 5 ? programmingLanguagesAmount : 3)
            .map((item, id) => (
              <>
                {frameworksAmount < 5 ? (
                  <>
                    <div className={styles.framework}>
                      <BadgeFramework data={item} key={id} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.framework}>
                      <BadgeFramework data={item} key={id} />
                    </div>
                  </>
                )}
              </>
            ))}
          {frameworksAmount > 4 && (
            <BadgeFramework isAndMore={true} andMoreAmount={frameworksAmount - 1} />
          )}
        </div>
      </div>
    </div>
  );
};
