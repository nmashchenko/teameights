import styles from '../user-card/user-card.module.scss';
import { BadgeText } from '@/shared/ui';
import { badgeFrameworkLayoutConfig } from './frameworks-layout-config';

type BadgeFrameworksProps = {
  frameworks: string[];
};

export const BadgeFrameworksLayout: React.FC<BadgeFrameworksProps> = ({ frameworks }) => {
  const layout =
    badgeFrameworkLayoutConfig[frameworks.length] || badgeFrameworkLayoutConfig.default;

  const isOneFramework = frameworks.length === 1;

  return (
    <div className={styles.badgeContainer}>
      {layout.map((size, index) => (
        <BadgeText
          className={styles[size]}
          data={
            size === 'extra' ? `+${frameworks.length - 3}` : frameworks[isOneFramework ? 0 : index]
          }
          key={frameworks[index]}
        />
      ))}
    </div>
  );
};
