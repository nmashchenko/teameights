import { clsx } from 'clsx';
import { FC } from 'react';
import { frameworkColors, frameworkTextColors } from 'shared/constant/frameworkColors';
import styles from './styles.module.scss';

/* Example of usage:
 *
 * export const UserFrameworks = ({userFrameworks, ...props}) => {
 *   return (
 *     <BadgeFrameworkContainer {...props}>
 *         {userFrameworks.map((item, id) => (
 *                 <BadgeFramework data={item} key={id} />
 *         ))}
 *     </BadgeFrameworkContainer>
 *   );
 * }; */

interface BadgeFrameworkProps {
  data: string;
  key: number;
  className?: string;
  maxWidth?: string;
}

export const BadgeFramework: FC<BadgeFrameworkProps> = ({
  className,
  maxWidth,
  data,
  key,
  ...props
}) => (
  <div
    key={key}
    className={clsx([className], styles.badge_framework)}
    style={{
      backgroundColor: `${frameworkColors[data] ? frameworkColors[data] : '#2F3239'}`,
      color: frameworkTextColors[data],
      maxWidth: `${maxWidth ? maxWidth : '100%'}`
    }}
    {...props}
  >
    {data}
  </div>
);
