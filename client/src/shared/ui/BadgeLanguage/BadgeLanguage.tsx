import { FC } from 'react';
import styles from './BadgeLanguage.module.scss';
import { languageOptions } from '../../constant/programmingLanguages';
import clsx from 'clsx';
import { BadgeLanguageProps } from './BadgeLanguageProps';

/* Example of usage:
 *
 * export const UserLanguages = ({userLanguages, ...props}) => {
 *   return (
 *     <BadgeLanguageContainer {...props}>
 *         {userLanguages.map((item, id) => (
 *                 <BadgeLanguage data={item} key={id} />
 *         ))}
 *     </BadgeLanguageContainer>
 *   );
 * }; */

export const BadgeLanguage: FC<BadgeLanguageProps> = ({
  data,
  className,
  maxWidth,
  key,
  ...props
}) => {
  return (
    <div
      key={key}
      className={clsx([className], styles.badge_language)}
      style={{ maxWidth: `${maxWidth ? maxWidth : '100%'}` }}
      {...props}
    >
      {languageOptions[data]}
    </div>
  );
};
