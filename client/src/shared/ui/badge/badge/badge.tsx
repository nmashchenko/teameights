import clsx from 'clsx';
import { FC } from 'react';
import styles from './badge.module.scss';
import { IconWrapper } from '@/shared/ui/icon-wrapper';
import { Typography } from '../../typography';
import { Colors } from '@/shared/types';

/**
 * Badge Component
 *
 * This is a customizable badge component tailored for displaying programming languages.
 * The badge's content is derived from the provided `data` prop using the 'languageOptions'.
 *
 * Props:
 *
 * @prop {string} data - The key corresponding to the language name in 'languageOptions'.
 * @prop {number} key - The unique key for the badge, especially useful if rendering multiple badges in a list or collection.
 * @prop {string} [className] - Additional Css classes to apply to the badge for custom styling.
 * @prop {string} [maxWidth='100%'] - Custom maximum width for the badge. Must be passed with a valid Css unit (e.g. '50px', '100%'). Default is '100%'.
 *
 * Usage:
 *
 * ```tsx
 * import { BadgeTeam } from 'shared/ui';
 *
 * <BadgeTeam data="javascript" key={1} />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - 'languageOptions' is used to fetch the display name of the programming language. If a language key is not listed in this object, the badge will not display the corresponding name.
 */
interface BadgeProps {
  className?: string;
  maxWidth?: string;
  fontColor?: Colors;
  icon: React.ReactNode;
  title: string;
}

export const Badge: FC<BadgeProps> = props => {
  const { className, maxWidth, icon, fontColor, title } = props;
  return (
    <div
      className={clsx([className], styles.badge)}
      style={{ maxWidth: `${maxWidth ? maxWidth : '100%'}` }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Typography size='body_s' color={fontColor}>
        {title}
      </Typography>
    </div>
  );
};
