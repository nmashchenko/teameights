import { BadgeText, Flex, Typography } from '@/shared/ui';
import styles from './options.module.scss';
import { FC } from 'react';
import { IconItem } from '@/app/onboarding/ui/steps/icons-selector/ui/icon-item/icon-item';
import { IOption } from '@/shared/interfaces';

interface OptionsProps {
  className?: string;
  icons: IOption[];
  selectedIcons: IOption[];
  filterFn: (item: IOption) => void;
  toggleFn: (clickedIcon: IOption) => void;
  description: string;
  type?: 'icon' | 'text';
}

export const Options: FC<OptionsProps> = ({
  icons,
  selectedIcons,
  filterFn,
  toggleFn,
  type = 'icon',
  description,
}) => {
  return (
    <Flex gap={16} direction='column'>
      <Typography size='body_s' color='greyNormal'>
        {description}
      </Typography>
      <div className={styles.all_icons}>
        {icons
          .filter(filterFn)
          .map((icon, index) =>
            type === 'icon' ? (
              <IconItem
                className={styles.badge_icon}
                isActive={Boolean(selectedIcons.find(option => option.label === icon.label))}
                onClick={() => toggleFn(icon)}
                icon={icon.label}
                key={index}
              />
            ) : (
              <BadgeText
                isNotActive={!selectedIcons.find(option => option.label === icon.label)}
                onClick={() => toggleFn(icon)}
                data={icon.label}
                key={index}
              />
            )
          )}
      </div>
    </Flex>
  );
};
