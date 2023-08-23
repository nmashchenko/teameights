import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './BadgeLanguage.module.scss';
import { languageOptions } from '../../constant/programmingLanguages';

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
    <div {...props} className={(styles.badge_language_container, className)}>
      {userLanguages.map((item, id) => (
        <div className={styles.badge_language} key={id}>
          {languageOptions[item]}
        </div>
      ))}
    </div>
  );
};
