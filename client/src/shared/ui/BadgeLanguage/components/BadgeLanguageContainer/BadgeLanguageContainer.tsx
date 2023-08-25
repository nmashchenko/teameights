import { ReactNode, FC } from 'react';
import styles from './BadgeLanguageContainer.module.scss';

interface BadgeLanguageContainerProps {
  children: ReactNode;
  className?: string;
}

export const BadgeLanguageContainer: FC<BadgeLanguageContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={(styles.BadgeLanguageContainer, className)} {...props}>
      {children}
    </div>
  );
};
