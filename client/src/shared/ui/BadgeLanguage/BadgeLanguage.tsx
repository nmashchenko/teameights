import { FC } from 'react';
import styles from './BadgeLanguage.module.scss';
import { languageOptions } from '../../constant/programmingLanguages';
import { BadgeLanguageContainer } from './components/BadgeLanguageContainer/BadgeLanguageContainer';

interface BadgeLanguageProps {
  userLanguages: Array<string>;
  className?: string;
  width?: string;
}

export const BadgeLanguage: FC<BadgeLanguageProps> = ({
  userLanguages,
  className,
  width = '91px',
  ...props
}) => {
  return (
    <BadgeLanguageContainer {...props} className={className}>
      {userLanguages.map((item, id) => (
        <div className={styles.badge_language} key={id}>
          {languageOptions[item]}
        </div>
      ))}
    </BadgeLanguageContainer>
  );
};
