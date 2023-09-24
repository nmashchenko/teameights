import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import type { Colors } from '@/shared/types';
import styles from './typography.module.scss';
import colors from '../../styles/colors.module.scss';

/**
 * Typography Component
 *
 * The Typography component is designed to help standardize font stylings across the application.
 * It provides predefined font sizes and styles based on the design system's typographical scale.
 *
 * Props:
 *
 * @prop {ReactNode} children - The text or content that needs to be rendered within the typography component.
 * @prop {string} className - Optional additional class for custom styling.
 * @prop {TypographySize} size - The font size based on the predefined typographical scale. Default is 'body_m'.
 * @prop {TypographyVariants} variant - The semantic HTML tag to render (e.g., h1, h2, p, etc.). Default is 'p'.
 * @prop {Colors} color - The text color. Uses Css variables if provided.
 *
 * Types:
 *
 * @type {TypographySize} - All available typography sizes.
 * @type {TypographyVariants} - All available HTML semantic tags.
 *
 * Usage:
 *
 * ```tsx
 * import { Typography } from 'shared/ui';
 *
 * <Typography variant='h1' size='caption'>
 *   Some Text
 * </Typography>
 * ```
 *
 * Output:
 * Renders an `<h1>` element with the text "Some text" styled with the "Body M" size.
 *
 * Styling:
 * Styles are imported from 'styles.module.scss'. It's crucial to ensure that the SCSS module contains the necessary styles for all sizes in the TypographySize enum.
 *
 * Accessibility:
 * By providing the option to use semantic HTML tags, the Typography component promotes better accessibility.
 *
 * Dependencies:
 * The component uses the `clsx` library for conditionally joining classNames together.
 */

type TypographySize =
  | 'heading_s'
  | 'heading_m'
  | 'heading_l'
  | 'heading_xl'
  | 'body_s'
  | 'body_m'
  | 'body_l'
  | 'caption';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  size?: TypographySize;
  variant?: TypographyVariants;
  color?: Colors;
}

export const Typography: FC<TypographyProps> = props => {
  const { children, className, size = 'body_m', variant = 'p', color = 'white', ...rest } = props;
  const Component = variant;

  return (
    <Component
      className={clsx(
        {
          [styles[size]]: size,
          [colors[color]]: color,
        },
        [className]
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
