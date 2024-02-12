import clsx from 'clsx';
import { FC } from 'react';
import { badgeColors, badgeIcons } from '@/shared/constant';
import styles from './badge-icon.module.scss';

/**
 * BadgeIcon Component
 *
 * This is a customizable badge component tailored for displaying programming languages, tools, etc.
 * The badge's content is derived from the provided `data`
 *
 * Props:
 *
 * @prop {string} data - The key corresponding to the language name in 'languageOptions'.
 * @prop {number} uniqueKey - The unique key for the badge, especially useful if rendering multiple badges in a list or collection.
 * @prop {string} [className] - Additional Css classes to apply to the badge for custom styling.
 * @prop {string} [maxWidth='100%'] - Custom maximum width for the badge. Must be passed with a valid Css unit (e.g. '50px', '100%'). Default is '100%'.
 *
 * Usage:
 *
 * ```tsx
 * import { BadgeIcon } from 'shared/ui';
 *
 * <BadgeIcon data="javascript" />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - 'languageOptions' is used to fetch the display name of the programming language. If a language key is not listed in this object, the badge will not display the corresponding name.
 */
interface BadgeIconProps {
  data: string;
  className?: string;
  maxWidth?: string;
  isActive?: boolean;
}

export const BadgeIcon: FC<BadgeIconProps> = props => {
  const { data, className, maxWidth, isActive } = props;
  return (
    <div
      className={clsx([className], styles.badge_icon)}
      style={{
        maxWidth: `${maxWidth ? maxWidth : '100%'}`,
        background: `${isActive ? badgeColors[data] : 'var(--grey-dark-color)'}`,
      }}
    >
      {badgeIcons[data] || data}
    </div>
  );
};
