import styles from '../user-card/user-card.module.scss';
import { BadgeIcon } from '@/shared/ui';
import { languageLayoutConfig } from './language-layout-config';

interface ProgrammingLanguagesProps {
  languages: string[];
}

export const ProgrammingLanguagesLayout: React.FC<ProgrammingLanguagesProps> = ({ languages }) => {
  const layout = languageLayoutConfig[languages.length] || languageLayoutConfig.default;

  return (
    <div className={styles.languagesContainer}>
      {layout.map((type, index) => {
        if (type === 'more') return <BadgeIcon key={index} data={`+${languages.length - 1}`} />;
        return languages[index] && <BadgeIcon key={languages[index]} data={languages[index]} />;
      })}
    </div>
  );
};
