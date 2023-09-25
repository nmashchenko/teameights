import styles from './styles.module.scss';

interface AndMoreProps {
  makeWhite?: boolean;
  children: React.ReactNode;
}

export const AndMore = ({ makeWhite, children, ...props }: AndMoreProps) => (
  <div className={styles.container} {...props}>
    <div className={styles.button}>{children}</div>
  </div>
);
