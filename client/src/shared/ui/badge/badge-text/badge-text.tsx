import { clsx } from 'clsx';
import { FC } from 'react';
import { badgeColors, badgeTextColors } from '@/shared/constant';
import styles from './badge-text.module.scss';

/**
 * BadgeText Component
 *
 * This is a customizable badge component specifically tailored for displaying framework, field, methodology names.
 * The badge automatically styles its background and text color based on the framework, field, methodology provided.
 *
 * Props:
 *
 * @prop {string} data - The name of the framework to display and style the badge. Make sure the name is available in 'frameworkColors' and 'frameworkTextColors'.
 * @prop {string} [className] - Additional Css classes to apply to the badge for custom styling.
 * @prop {string} [maxWidth='100%'] - Custom maximum width for the badge. Must be passed with a valid Css unit (e.g. '50px', '100%'). Default is '100%'.
 *
 * Usage:
 *
 * ```tsx
 * import { BadgeText } from 'shared/ui';
 *
 * <BadgeText data="React" />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - Colors are fetched from 'badgeColors' and 'badgeTextColors'. If a framework is not listed in these objects, the badge will default to a general color.
 */

interface BadgeFrameworkProps {
  data: string;
  className?: string;
  maxWidth?: string;
  isNotActive?: boolean;
  onClick?: () => void;
}

export const BadgeText: FC<BadgeFrameworkProps> = props => {
  const { className, maxWidth, data, isNotActive, onClick } = props;
  return (
    <div
      className={clsx([className], styles.badge_text)}
      style={{
        backgroundColor: isNotActive
          ? '#2F3239'
          : `${badgeColors[data] ? badgeColors[data] : '#2F3239'}`,
        color: isNotActive ? 'white' : badgeTextColors[data],
        maxWidth: `${maxWidth ? maxWidth : '100%'}`,
      }}
      onClick={onClick}
    >
      {data}
    </div>
  );
};
