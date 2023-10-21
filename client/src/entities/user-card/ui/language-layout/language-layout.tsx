import styles from '../card/card.module.scss';
import { BadgeLanguage } from '@/shared/ui';

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

export const ProgrammingLanguagesLayout: React.FC<ProgrammingLanguagesProps> = ({ languages }) => {
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
