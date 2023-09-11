import type { FC } from 'react';
import { clsx } from 'clsx';
import { frameworkColors, frameworkTextColors } from 'shared/constant';

import styles from './styles.module.scss';

/**
 * BadgeFramework Component
 *
 * This is a customizable badge component specifically tailored for displaying framework names.
 * The badge automatically styles its background and text color based on the framework provided.
 *
 * Props:
 *
 * @prop {string} data - The name of the framework to display and style the badge. Make sure the name is available in 'frameworkColors' and 'frameworkTextColors'.
 * @prop {number} key - The unique key for the badge, especially useful if rendering multiple badges in a list.
 * @prop {string} [className] - Additional Css classes to apply to the badge for custom styling.
 * @prop {string} [maxWidth='100%'] - Custom maximum width for the badge. Must be passed with a valid Css unit (e.g. '50px', '100%'). Default is '100%'.
 *
 * Usage:
 *
 * ```tsx
 * import { BadgeFramework } from 'shared/ui';
 *
 * <BadgeFramework data="React" key={1} />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - Colors are fetched from 'frameworkColors' and 'frameworkTextColors'. If a framework is not listed in these objects, the badge will default to a general color.
 */

interface BadgeFrameworkProperties {
  data: string;
  key: number;
  className?: string;
  maxWidth?: string;
}

export const BadgeFramework: FC<BadgeFrameworkProperties> = ({
  className,
  data,
  key,
  maxWidth,
  ...properties
}) => (
  <div
    key={key}
    className={clsx([className], styles.badge_framework)}
    style={{
      backgroundColor: `${frameworkColors[data] ? frameworkColors[data] : '#2F3239'}`,
      color: frameworkTextColors[data],
      maxWidth: `${maxWidth || '100%'}`,
    }}
    {...properties}
  >
    {data}
  </div>
);
