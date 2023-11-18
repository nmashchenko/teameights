import styles from '../card/card.module.scss';
import { BadgeFramework } from '@/shared/ui';

type BadgeFrameworkType = 'full' | 'half' | 'empty' | 'extra';
type BadgeFrameworkLayout = BadgeFrameworkType[];

interface badgeFrameworkLayoutConfig {
  default: BadgeFrameworkLayout;

  [badgeCount: number]: BadgeFrameworkLayout;
}

const badgeFrameworkLayoutConfig: badgeFrameworkLayoutConfig = {
  1: ['empty', 'full'],
  2: ['full', 'full'],
  3: ['half', 'half', 'full'],
  4: ['half', 'half', 'half', 'half'],
  default: ['half', 'half', 'half', 'extra'],
};

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
        <BadgeFramework
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
