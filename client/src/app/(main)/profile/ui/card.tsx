import { type CSSProperties, ReactNode } from 'react';
import styles from './card.module.scss';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  borderRadius?: string;
}

export const Card = ({ children, style }: CardProps) => {
  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
};
