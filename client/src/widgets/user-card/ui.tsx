import { BadgeFramework, BadgeLanguage } from 'shared/ui';
import styles from './styles.module.scss';

interface UserCardProps {
  image: string;
  programmingLanguages: Array<string>;
  frameworks: Array<string>;
}

export const UserCard = ({ image, programmingLanguages, frameworks }: UserCardProps) => {
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
              {programmingLanguages.map((item, id) => {
                return (
                  <div className={styles.language} key={id}>
                    <BadgeLanguage data={item} />
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
              gap: 4,
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

        <div className={styles.frameworksContainer} style={{}}>
          {frameworks.map((item, id) => {
            console.log(item);

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
