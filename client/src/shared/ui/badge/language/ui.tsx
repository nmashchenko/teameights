import type { FC } from 'react';
import clsx from 'clsx';
import { languageOptions } from 'shared/constant';

import styles from './styles.module.scss';

/**
 * BadgeLanguage Component
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
 * import { BadgeLanguage } from 'shared/ui';
 *
 * <BadgeLanguage data="javascript" key={1} />
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - 'languageOptions' is used to fetch the display name of the programming language. If a language key is not listed in this object, the badge will not display the corresponding name.
 */
interface BadgeLanguageProperties {
  data: string;
  key: number;
  className?: string;
  maxWidth?: string;
}

export const BadgeLanguage: FC<BadgeLanguageProperties> = ({
  className,
  data,
  key,
  maxWidth,
  ...properties
}) => (
  <div
    key={key}
    className={clsx([className], styles.badge_language)}
    style={{ maxWidth: `${maxWidth || '100%'}` }}
    {...properties}
  >
    {languageOptions[data]}
  </div>
);
