import { FC } from 'react';
import Image from 'next/image';
import { BadgeFramework, BadgeLanguage } from '@/shared/ui';
import styles from './card.module.scss';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
}

export const UserCard: FC<UserCardProps> = props => {
  const { image, programmingLanguages, frameworks } = props;

  const programmingLanguagesAmount = programmingLanguages.length;
  const frameworksAmount = frameworks.length;

  const renderBadges = (
    data: string[],
    BadgeComponent: typeof BadgeLanguage | typeof BadgeFramework,
    andMore: boolean = false,
    andMoreAmount: number = 0
  ) => {
    const sliceAmount = andMore ? 1 : 2;
    const mappedData = data.slice(0, sliceAmount);

    return mappedData.map((item, id) => {
      const key = andMore ? 0 : id;
      const props = andMore ? { isAndMore: true, andMoreAmount } : { data: item };
      return <BadgeComponent key={key} {...props} />;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top_part}>
          <div className={styles.language_badges}>
            <Image className={styles.user_logo} src={image} alt='' width={70} height={70} />
            <div className={styles.languagesContainer}>
              {programmingLanguagesAmount <= 2 ? (
                renderBadges(programmingLanguages, BadgeLanguage)
              ) : (
                <>
                  {renderBadges(programmingLanguages, BadgeLanguage)}
                  {renderBadges(
                    programmingLanguages,
                    BadgeLanguage,
                    true,
                    programmingLanguagesAmount - 1
                  )}
                </>
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
          {renderBadges(
            frameworks,
            BadgeFramework,
            false,
            programmingLanguagesAmount < 5 ? programmingLanguagesAmount : 3
          )}
          {frameworksAmount > 4 && (
            <BadgeFramework isAndMore={true} andMoreAmount={frameworksAmount - 1} />
          )}
        </div>
      </div>
    </div>
  );
};
