import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './BadgeFramework.module.scss';
import {
  frameworkColors,
  frameworkTextColors,
} from 'shared/constant/frameworkColors';

/* Example of usage:
 *
 * export const BadgeFramework = ({userFrameworks, ...props}) => {
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
      backgroundColor: `${
        frameworkColors[data] ? frameworkColors[data] : '#2F3239'
      }`,
      color: frameworkTextColors[data],
      maxWidth: `${maxWidth ? maxWidth : '100%'}`,
    }}
    {...props}
  >
    {data}
  </div>
);
