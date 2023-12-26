import { BadgeIcon, Flex, Typography } from '@/shared/ui';
import styles from './icon-item.module.scss';

interface IconItemProps {
  icon: string;
  onClick?: () => void;
  isActive?: boolean;
}
export const IconItem = ({ icon, onClick, isActive }: IconItemProps) => {
  return (
    <div onClick={() => onClick && onClick()} className={styles.icon_item}>
      <Flex gap='8px' align='center'>
        <BadgeIcon isActive={Boolean(isActive)} data={icon} />
        <Typography className={styles.icon_text} size='body_s'>
          {icon}
        </Typography>
      </Flex>
    </div>
  );
};
