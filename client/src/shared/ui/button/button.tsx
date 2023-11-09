import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';
import colors from '../../styles/colors.module.scss';
import {Colors} from "@/shared/types";

type ButtonType = 'tertiary' | 'danger' | 'secondary' | 'primary';

type ButtonContent = 'icon_button' | 'button_with_text';

type ButtonSize = 'l' | 'm' | 's';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content to be displayed inside the button, can include text, icons, or other elements.
   */
  children: ReactNode;

  /**
   * Additional CSS classes to be applied to the button.
   */
  className?: string;

  /**
   * Size of the button. Can be 's' (small), 'm' (medium), or 'l' (large). Default is 'l'.
   * @default "l"
   */
  size?: ButtonSize;

  /**
   * Type of content inside the button. Can be 'icon_button' or 'button_with_text'. Default is 'button_with_text'.
   * @default "button_with_text"
   */
  content?: ButtonContent;

  /**
   * Type of the button. Can be 'tertiary', 'danger', 'secondary', or 'primary'. Default is 'primary'.
   * @default "primary"
   */
  typeBtn?: ButtonType;

  /**
   * Specifies if the button should be disabled or not. Default is false.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Width of the button. Accepts valid CSS width values.
   */
  width?: string;

  /**
   * Color of the button. Can be any valid color from the Colors type. Default is 'white'.
   * @default "white"
   */
  color?: Colors;

  /**
   * Padding of the button. Accepts valid CSS padding values.
   */
  padding?: string;
}

export const Button = (
  {
  className,
  children,
  content = 'button_with_text',
  size = "l",
  typeBtn = 'primary',
  isDisabled = false,
  width,
  color = 'white',
  padding,
  ...rest}: ButtonProps) => {


  return (
    <button
      disabled={isDisabled}
      style={{
        width,
        padding,
      }}
      className={clsx(
        styles.container,
        {
          [styles[`size_${size}`]]: size,
          [styles[typeBtn]]: typeBtn,
          [styles[content]]: content,
          [colors[color]]: color,
        },
        [className]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
