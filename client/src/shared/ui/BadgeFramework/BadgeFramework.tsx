import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './BadgeFramework.module.scss';
import {
  frameworkColors,
  frameworkTextColors,
} from 'shared/constant/frameworkColors';

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
  width = '91px',
  marginRight = '0',
  marginBottom = '0',
  flexGrow = '1',
  backgroundColor = '#E0FF00',
  userFrameworks,
  ...props
}) => {
  // TODO: Create container for BadgeFramework
  return (
    <div {...props}>
      {userFrameworks.map((item, id) => (
        <div
          key={id}
          className={
            (clsx(
              {
                [styles[width]]: width,
                [styles[marginRight]]: marginRight,
                [styles[marginBottom]]: marginBottom,
                [styles[flexGrow]]: flexGrow,
                [styles[backgroundColor]]: backgroundColor,
              },
              [className]
            ),
            styles.badge_framework)
          }
          style={{
            backgroundColor: frameworkColors[item],
            color: frameworkTextColors[item],
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
