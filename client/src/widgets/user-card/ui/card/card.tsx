import Image from 'next/image';

import { BadgeFramework, BadgeLanguage } from '@/shared/ui';

import LeaderIcon from '../../assets/Crown_28px.svg';
import styles from './card.module.scss';

type BadgeFrameworkType = 'full' | 'half' | 'empty' | 'extra';
type BadgeFrameworkLayout = BadgeFrameworkType[];

interface badgeFrameworkLayoutConfig {
  default: BadgeFrameworkLayout;

  [badgeCount: number]: BadgeFrameworkLayout;
}

const badgeFrameworkLayoutConfig: badgeFrameworkLayoutConfig = {
  1: ['full', 'empty'],
  2: ['full', 'full'],
  3: ['half', 'half', 'full'],
  4: ['half', 'half', 'half', 'half'],
  default: ['half', 'half', 'half', 'extra'],
};

type BadgeFrameworksProps = {
  badges: string[];
};

// TODO: Decompose to another file around parent
const BadgeFrameworksLayout: React.FC<BadgeFrameworksProps> = ({ badges }) => {
  const layout = badgeFrameworkLayoutConfig[badges.length] || badgeFrameworkLayoutConfig.default;

  return (
    <div className={styles.badgeContainer}>
      {layout.map((size, index) => (
        <div key={index} className={styles[size]}>
          <BadgeFramework
            data={size === 'extra' ? `+${badges.length - 3}` : badges[index]}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};

interface LanguageLayoutConfig {
  default: string[];

  [languageCount: number]: string[];
}

const languageLayoutConfig: LanguageLayoutConfig = {
  1: ['single', 'empty'],
  2: ['single', 'single'],
  3: ['single', 'more'],
  default: ['single', 'more'],
};

interface ProgrammingLanguagesProps {
  languages: string[];
}

// TODO: Decompose to another file around parent
const ProgrammingLanguagesLayout: React.FC<ProgrammingLanguagesProps> = ({ languages }) => {
  const layout = languageLayoutConfig[languages.length] || languageLayoutConfig.default;

  return (
    <div className={styles.languagesContainer}>
      {layout.map((type, index) => {
        if (type === 'more') {
          return <BadgeLanguage key={index} data={`+${languages.length - 1}`} />;
        }
        return languages[index] && <BadgeLanguage key={languages[index]} data={languages[index]} />;
      })}
    </div>
  );
};

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
              {/* Need to be semantic tag */}
              <div className={styles.user_city}>Brooklyn, 21 </div>
              {/* What is this image?*/}
              <Image
                src='https://via.placeholder.com/16x12'
                alt='User avatar'
                width={16}
                height={12}
              />
            </div>
            <div className={styles.user_job}>Developer</div>
          </div>
        </div>

        <BadgeFrameworksLayout badges={frameworks} />
      </div>
    </div>
  );
};
