import styles from './placeholders.module.scss';
import { BadgeIcon, BadgeText, Flex } from '@/shared/ui';
import { EmptyTile } from '@/app/onboarding/ui/steps/icons-selector/ui/empty-tile/empty-tile';
import { FC } from 'react';
import { IOption } from '@/shared/interfaces';

interface PlaceholdersProps {
  selectedIcons: IOption[];
  toggleIcon: (clickedIcon: IOption) => void;
  type?: 'icon' | 'text';
  error?: string;
}
export const Placeholders: FC<PlaceholdersProps> = ({
  selectedIcons,
  toggleIcon,
  type = 'icon',
  error,
}) => {
  const items = (type: 'icon' | 'text') =>
    Array(8)
      .fill(null)
      .map((value, index) => {
        const iconsItem = selectedIcons[index];
        if (iconsItem) {
          return (
            <div onClick={() => toggleIcon(iconsItem)} key={index}>
              {type === 'icon' ? (
                <BadgeIcon data={iconsItem.label} isActive />
              ) : (
                <BadgeText data={iconsItem.label} />
              )}
            </div>
          );
        }
        return <EmptyTile key={index} type={type} />;
      });

  return (
    <Flex className={styles.selected_icons} gap={10} direction='column'>
      {type === 'text' ? (
        <div className={styles.placeholders}>{items(type)}</div>
      ) : (
        <Flex wrap='wrap' gap='24px'>
          {items(type)}
        </Flex>
      )}
      {error && (
        <span className={styles.error} role='alert'>
          {error}
        </span>
      )}
    </Flex>
  );
};
