import styles from '../card/card.module.scss';
import { BadgeFramework } from '@/shared/ui';

type BadgeFrameworkType = 'full' | 'half' | 'empty' | 'extra';
type BadgeFrameworkLayout = BadgeFrameworkType[];

interface badgeFrameworkLayoutConfig {
  default: BadgeFrameworkLayout;

  [badgeCount: number]: BadgeFrameworkLayout;
}

const badgeFrameworkLayoutConfig: badgeFrameworkLayoutConfig = {
  1: ['full', 'empty'],
  2: ['full', 'full'],
  3: ['half', 'half', 'full'],
  4: ['half', 'half', 'half', 'half'],
  default: ['half', 'half', 'half', 'extra'],
};

type BadgeFrameworksProps = {
  badges: string[];
};

export const BadgeFrameworksLayout: React.FC<BadgeFrameworksProps> = ({ badges }) => {
  const layout = badgeFrameworkLayoutConfig[badges.length] || badgeFrameworkLayoutConfig.default;

  return (
    <div className={styles.badgeContainer}>
      {layout.map((size, index) => (
        <div key={index} className={styles[size]}>
          <BadgeFramework
            data={size === 'extra' ? `+${badges.length - 3}` : badges[index]}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
