import { ReactNode } from 'react';
import styles from './card.module.scss';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const cls = clsx(styles.card, className);
  console.log(cls);
  return <div className={cls}>{children}</div>;
};
