import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import { Colors } from 'shared/constant';
import styles from './styles.module.scss';

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
 * @prop {TypographySize} size - The font size based on the predefined typographical scale. Default is 'Body_M'.
 * @prop {TypographyVariants} variant - The semantic HTML tag to render (e.g., h1, h2, p, etc.). Default is 'p'.
 * @prop {Colors} color - The text color. Uses Css variables if provided.
 *
 * Enumerations:
 *
 * @enum {TypographySize} - Enumeration for the available typography sizes.
 * @enum {TypographyVariants} - Enumeration for the available HTML semantic tags.
 *
 * Usage:
 *
 * ```tsx
 * import { Typography, TypographyVariants, TypographySize } from 'path-to-typography-component';
 *
 * <Typography variant={TypographyVariants.h1} size={TypographySize.Body_M}>
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

export enum TypographySize {
  Heading_S = 'heading_s',
  Heading_M = 'heading_m',
  Heading_L = 'heading_l',
  Heading_XL = 'heading_xl',
  Body_M = 'body_m',
  Body_L = 'body_l',
  Body_XL = 'body_xl',
  Caption = 'caption',
}

export enum TypographyVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
}

interface TypographyProps {
  children: ReactNode;
  className?: string;
  size?: TypographySize;
  variant?: TypographyVariants;
  color?: Colors;
}

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  size = TypographySize.Body_M,
  variant = TypographyVariants.p,
  color,
  ...props
}) => {
  const Component = variant;

  return (
    <Component
      className={clsx(
        {
          [styles[size]]: size,
        },
        [className]
      )}
      style={color ? { color: `var(${color})` } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};
