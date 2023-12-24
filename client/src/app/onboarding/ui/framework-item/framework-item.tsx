import { BadgeText, Flex } from '@/shared/ui';
import styles from './framework-item.module.scss';
import clsx from 'clsx';

interface LanguageItemProps {
  framework: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const FrameworkItem = ({ framework, onClick, isActive }: LanguageItemProps) => {
  const onClickProp = onClick ? { onClick: () => onClick() } : {};
  return (
    <div style={{ width: '100%' }} {...onClickProp}>
      <Flex width={'100%'} gap='8px' align='center'>
        <BadgeText
          className={
            isActive ? styles.framework_wrapper : clsx(styles.disabled, styles.framework_wrapper)
          }
          data={framework}
        />
      </Flex>
    </div>
  );
};
