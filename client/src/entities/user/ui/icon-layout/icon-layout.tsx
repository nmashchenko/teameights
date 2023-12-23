import styles from '../user-card/user-card.module.scss';
import { BadgeIcon } from '@/shared/ui';
import { iconLayoutConfig } from './icon-layout-config';
import { FC } from 'react';

interface IconProps {
  icons: string[];
}

export const IconLayout: FC<IconProps> = ({ icons }) => {
  const layout = iconLayoutConfig[icons.length] || iconLayoutConfig.default;

  return (
    <div className={styles.icons_container}>
      {layout.map((type, index) => {
        if (type === 'more') return <BadgeIcon key={index} data={`+${icons.length - 1}`} />;
        return icons[index] && <BadgeIcon key={index} data={icons[index]} />;
      })}
    </div>
  );
};
