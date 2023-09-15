import Link from 'next/link';
import clsx from 'clsx';
import styles from './SidebarItem.module.scss';

type SidebarItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  active: boolean;
  path: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  active,
  icon,
  path,
  title,
  isActive,
  ...props
}) => {
  return (
    <li {...props}>
      <Link href={path} className={clsx(styles.wrapper, { [styles.active]: isActive })}>
        <div className={styles.icon}>{icon}</div>
        <span className={clsx(styles.title, { [styles.active]: active })}>{title}</span>
      </Link>
    </li>
  );
};
