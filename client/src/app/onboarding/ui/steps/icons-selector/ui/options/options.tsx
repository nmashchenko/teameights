import { BadgeText, Flex, Typography } from '@/shared/ui';
import styles from './options.module.scss';
import { FC } from 'react';
import { IconItem } from '@/app/onboarding/ui/steps/icons-selector/ui/icon-item/icon-item';
import { IOption } from '@/shared/interfaces';

interface OptionsProps {
  className: string;
  icons: IOption[];
  selectedIcons: IOption[];
  filterFn: (item: IOption) => void;
  toggleFn: (clickedIcon: IOption) => void;
  description: string;
  type?: 'icon' | 'text';
}

export const Options: FC<OptionsProps> = ({
  className= styles.recommended_icons,
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
      <div className={className}>
        {icons
          .filter(filterFn)
          .map((icon, index) =>
            type === 'icon' ? (
              <IconItem
                isActive={Boolean(selectedIcons.find(option => option.label === icon.label))}
                onClick={() => toggleFn(icon)}
                icon={icon.label}
                key={index}
              />
            ) : (
              <BadgeText
                isNotActive={!Boolean(selectedIcons.find(option => option.label === icon.label))}
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
