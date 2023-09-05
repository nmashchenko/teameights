import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

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

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    content = 'text_button',
    size = 'l',
    typeBtn = 'primary',
    isDisabled = false,
    width,
    ...otherProps
  } = props;

  return (
    <button
      disabled={isDisabled}
      style={{
        width: width ? `${width}` : undefined
      }}
      className={clsx(styles.container, {}, [
        className,
        styles[`size_${size}`],
        styles[typeBtn],
        styles[content]
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
