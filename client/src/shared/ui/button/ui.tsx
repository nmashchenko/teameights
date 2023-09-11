import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

/**
 * Button Component
 *
 * This is a customizable Button component with various styles and sizes.
 *
 * Props:
 *
 * @prop {ReactNode} children - Content of the button. Can be either text, icon, or any other ReactNode.
 * @prop {ButtonSize} [size='l'] - Size of the button. Accepts 'l' (large), 'm' (medium), 's' (small). Default is 'l'.
 * @prop {ButtonContent} [content='text_button'] - Content type of the button. Accepts 'icon_button' or 'text_button'. Default is 'text_button'.
 * @prop {ButtonType} [typeBtn='primary'] - Type or theme of the button. Accepts 'tertiary', 'danger', 'secondary', 'primary'. Default is 'primary'.
 * @prop {string} [className] - Additional Css classes to apply to the button for custom styling.
 * @prop {boolean} [isDisabled=false] - Whether the button is disabled. Default is false.
 * @prop {string} [width] - Custom width for the button. Must be passed with a valid Css unit (e.g. '50px', '100%').
 *
 * Usage:
 *
 * ```tsx
 * import { Button } from 'shared/ui';
 *
 * <Button typeBtn="danger" size="m">Click Me!</Button>
 * ```
 *
 * Note:
 * - This component uses `clsx` for conditional class joining, ensuring optimal performance.
 * - External styles are imported from 'styles.module.scss'. Make sure the styles are appropriately set in the SCSS file.
 * - For custom colors, make sure to define the color as a Css variable and pass the variable name (without '--') to the 'color' prop.
 */

type ButtonType = 'tertiary' | 'danger' | 'secondary' | 'primary';

type ButtonContent = 'icon_button' | 'text_button';

type ButtonSize = 'l' | 'm' | 's';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  content?: ButtonContent;
  typeBtn?: ButtonType;
  className?: string;
  isDisabled?: boolean;
  width?: string;
}

export const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    content = 'text_button',
    size = 'l',
    typeBtn = 'primary',
    isDisabled = false,
    width,
    color,
    ...otherProps
  } = props;

  return (
    <button
      disabled={isDisabled}
      style={{
        width: width ? `${width}` : undefined,
        color: color ? `var(${color})` : undefined,
      }}
      className={clsx(styles.container, {}, [
        className,
        styles[`size_${size}`],
        styles[typeBtn],
        styles[content],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
