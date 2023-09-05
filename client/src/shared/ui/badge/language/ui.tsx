import clsx from 'clsx';
import { FC } from 'react';
import { languageOptions } from 'shared/constant/programmingLanguages';
import styles from './styles.module.scss';

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
 * };
 */

interface BadgeLanguageProps {
  data: string;
  key: number;
  className?: string;
  maxWidth?: string;
}

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
