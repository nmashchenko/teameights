import { BadgeFramework, BadgeLanguage } from 'shared/ui';
import { AndMore } from 'shared/ui/and-more';
import styles from './styles.module.scss';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
}

export const UserCard = ({ image, programmingLanguages, frameworks }: UserCardProps) => {
  const programmingLanguagesAmount = programmingLanguages.length;

  return (
    <div className={styles.container}>
      {/* <img
        style={{ width: 42, height: 42, transform: 'rotate(-38deg)', transformOrigin: '0 0' }}
        src='https://via.placeholder.com/42x42'
      /> */}
      <div className={styles.wrapper}>
        <div
          style={{
            alignSelf: 'stretch',
            height: 146,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 16,
            display: 'flex'
          }}
        >
          <div
            style={{
              width: 190,
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'inline-flex'
            }}
          >
            <img style={{ width: 70, height: 70, borderRadius: 5 }} src={image} />
            <div className={styles.languagesContainer}>
              {programmingLanguages
                .slice(0, programmingLanguagesAmount < 2 ? programmingLanguagesAmount : 2)
                .map((item, id) => {
                  let andMore = <></>;

                  if (id === 1 && programmingLanguagesAmount > 2) {
                    andMore = (
                      <AndMore makeWhite={false}>{programmingLanguagesAmount - 2}+ more</AndMore>
                    );
                  }

                  return (
                    <div>
                      {andMore}
                      <BadgeLanguage data={item} key={id} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              height: 60,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex'
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8,
                display: 'inline-flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}
              >
                Brooklyn, 21{' '}
              </div>
              <img style={{ width: 16, height: 12 }} src='https://via.placeholder.com/16x12' />
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                color: '#8F9094',
                fontSize: 14,
                fontWeight: '400',
                wordWrap: 'break-word'
              }}
            >
              Developer
            </div>
          </div>
        </div>

        <div className={styles.frameworksContainer}>
          {frameworks.map((item, id) => {
            return (
              <div className={styles.framework} key={id}>
                <BadgeFramework data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
