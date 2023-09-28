import { BadgeFramework, BadgeLanguage } from '@/shared/ui';
import { AndMore } from '@/shared/ui/and-more/and-more';
import styles from './user-card.module.scss';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
}

export const UserCard = ({ image, programmingLanguages, frameworks }: UserCardProps) => {
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
            <img style={{ width: 70, height: 70, borderRadius: 5 }} src={image} />
            <div className={styles.languagesContainer}>
              {programmingLanguages
                .slice(0, programmingLanguagesAmount < 2 ? programmingLanguagesAmount : 2)
                .map((item, id) => {
                  // Das ist gut?
                  // If languages-count < 2: display 2 badges
                  // If languages > 2: display 1 language + and-more button
                  return (
                    <div>
                      {programmingLanguagesAmount <= 2 ? (
                        <BadgeLanguage data={item} key={id} />
                      ) : programmingLanguagesAmount > 2 ? (
                        <div>
                          <BadgeLanguage data={item} key={id} />
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {programmingLanguagesAmount > 2 ? (
                        <AndMore makeWhite={false}>{programmingLanguagesAmount - 1}</AndMore>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={styles.user_info_container}>
            <div className={styles.user_personal_info}>
              <div className={styles.user_city}>Brooklyn, 21 </div>
              <img style={{ width: 16, height: 12 }} src='https://via.placeholder.com/16x12' />
            </div>
            <div
		className={styles.user_job}
            >
              Developer
            </div>
          </div>
        </div>

        <div className={styles.frameworksContainer}>
          {frameworks
            .slice(0, programmingLanguagesAmount < 5 ? programmingLanguagesAmount : 3)
            .map((item, id) => {
              // Das ist gut?
              // If languages-count < 2: display 2 badges
              // If languages > 2: display 1 language + and-more button

              return (
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
              );
            })}
          {frameworksAmount > 4 ? <AndMore makeWhite={false}>{frameworksAmount - 1}</AndMore> : ''}
        </div>
      </div>
    </div>
  );
};
