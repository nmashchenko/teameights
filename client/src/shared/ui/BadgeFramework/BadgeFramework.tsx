import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './BadgeFramework.module.scss';
import {
  frameworkColors,
  frameworkTextColors,
} from 'shared/constant/frameworkColors';
import { BadgeFrameworkContainer } from './components/BadgeFrameworkContainer/BadgeFrameworkContainer';

interface BadgeFrameworkProps {
  userFrameworks: Array<string>;
  className?: string;
  maxWidth?: string;
}

export const BadgeFramework: FC<BadgeFrameworkProps> = ({
  className,
  maxWidth,
  userFrameworks,
  ...props
}) => {
  return (
    <BadgeFrameworkContainer {...props}>
      {userFrameworks.map((item: string, id: number) => (
        <div
          key={id}
          className={clsx([className], styles.badge_framework)}
          style={{
            backgroundColor: `${
              frameworkColors[item] ? frameworkColors[item] : '#2F3239'
            }`,
            color: frameworkTextColors[item],
            maxWidth: `${maxWidth ? maxWidth : '100%'}`,
          }}
        >
          {item}
        </div>
      ))}
    </BadgeFrameworkContainer>
  );
};
