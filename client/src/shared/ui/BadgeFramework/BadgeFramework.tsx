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
  width?: string;
  marginRight?: string;
  marginBottom?: string;
  flexGrow?: string;
  backgroundColor?: string;
}

export const BadgeFramework: FC<BadgeFrameworkProps> = ({
  className,
  width,
  marginRight,
  marginBottom,
  flexGrow,
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
            width: `${width ? width : '91px'}`,
            marginRight: `${marginRight ? marginRight : '0'}`,
            marginBottom: `${marginBottom ? marginBottom : '0'}`,
            flexGrow: `${flexGrow ? flexGrow : '1'}`,
          }}
        >
          {item}
        </div>
      ))}
    </BadgeFrameworkContainer>
  );
};
