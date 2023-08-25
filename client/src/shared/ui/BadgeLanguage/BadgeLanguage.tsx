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
  width,
  ...props
}) => {
  return (
    <BadgeLanguageContainer {...props} className={className}>
      {userLanguages.map((item, id) => (
        <div
          className={styles.badge_language}
          key={id}
          style={{ width: `${width ? width : '91px'}` }}
        >
          {languageOptions[item]}
        </div>
      ))}
    </BadgeLanguageContainer>
  );
};
