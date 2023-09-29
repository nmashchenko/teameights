import { BadgeFramework, BadgeLanguage } from '@/shared/ui';
import styles from './user-card.module.scss';
import { FC } from 'react';
import Image from 'next/image';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
}

export const UserCard: FC<UserCardProps> = props => {
  const { image, programmingLanguages, frameworks } = props;

  const programmingLanguagesAmount = programmingLanguages.length;
  const frameworksAmount = frameworks.length;

  return (
    <div className={styles.container}>
      {/* <img
        style={{ width: 42, height: 42, transform: 'rotate(-38deg)', transformOrigin: '0 0' }}
        src='https://via.placeholder.com/42x42'
      /> */}
      <div className={styles.wrapper}>
        <div className={styles.top_part}>
          <div className={styles.language_badges}>
            <Image className={styles.user_logo} src={image} alt="" width={70} height={70} />
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
              <Image src='https://via.placeholder.com/16x12' alt="" width={16} height={12} />
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
          {frameworksAmount > 4 ? (
            <BadgeFramework isAndMore={true} andMoreAmount={frameworksAmount - 1} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
