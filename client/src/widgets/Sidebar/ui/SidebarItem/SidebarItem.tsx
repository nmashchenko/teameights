import Link from 'next/link';
import clsx from 'clsx';
import styles from './NavItem.module.scss';

type SidebarItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  active: boolean;
  path: string;
  icon: React.ReactNode;
  title: string;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  active,
  icon,
  path,
  title,
  ...props
}) => {
  return (
    <li className={styles.wrapper} {...props}>
      <Link href={path} className={clsx({ [styles.active]: active })}>
        <div className={styles.icon}>{icon}</div>
        <span className={clsx(styles.title, { [styles.active]: active })}>{title}</span>
      </Link>
    </li>
  );
};
