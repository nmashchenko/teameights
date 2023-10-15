import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './badge.module.scss';
import { Typography, IconWrapper } from '@/shared/ui';
import { Colors } from '@/shared/types';
import Link from 'next/link';

/**
 * Badge Component
 *
 * This is a customizable badge component tailored for displaying programming languages.
 * The badge's content is derived from the provided `data` prop using the 'languageOptions'.
 *
 * Props:
 * @prop {string} [className] - Additional Css classes to apply to the badge for custom styling.
 * @prop {string} [maxWidth='100%'] - Custom maximum width for the badge. Must be passed with a valid Css unit (e.g. '50px', '100%'). Default is '100%'.
 * @prop {string} [fontColor] - Color prop for text styling is located inside a badge.
 * @prop {ReactNode} [icon] - Icon prop.
 * @prop {string} [type] - Type prop is setting Link or just simple Badge option of component.
 * @prop {string} [to] - Link address.
 * @prop {string} [title] - Text inside a Badge.
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
  icon: ReactNode;
  type: 'block' | 'link';
  to?: string;
  title: string;
}

export const Badge: FC<BadgeProps> = props => {
  const { className, maxWidth, icon, fontColor, title, type = 'block', to } = props;

  return (
    <>
      {type === 'block' && (
        <div
          className={clsx(styles.badge, [className])}
          style={{ maxWidth: `${maxWidth ? maxWidth : '100%'}` }}
        >
          <IconWrapper>{icon}</IconWrapper>
          <Typography size='body_s' color={fontColor}>
            {title}
          </Typography>
        </div>
      )}

      {type === 'link' && (
        <Link
          href={to || ''}
          target='_blank'
          className={clsx(styles.badge, [className])}
          style={{ maxWidth: `${maxWidth ? maxWidth : '100%'}` }}
        >
          <IconWrapper>{icon}</IconWrapper>
          <Typography size='body_s' color={fontColor}>
            {title}
          </Typography>
        </Link>
      )}
    </>
  );
};
