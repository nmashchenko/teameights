import { clsx } from 'clsx';
import { ReactNode, FC } from 'react';
import styles from './BadgeFrameworkContainer.module.scss';

interface BadgeFrameworkContainerProps {
  children: ReactNode;
  justifyContent?: string;
}

export const BadgeFrameworkContainer: FC<BadgeFrameworkContainerProps> = ({
  children,
  justifyContent = 'start',
  ...props
}) => {
  return (
    <div
      className={
        (clsx({
          [styles[justifyContent]]: justifyContent,
        }),
        styles.BadgeFrameworkContainer)
      }
      {...props}
    >
      {children}
    </div>
  );
};
