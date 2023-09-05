import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import { Colors } from 'shared/constant/colors';
import styles from './styles.module.scss';

{
  /* 
Документация как пользоваться:
TypographySize - определяет размер шрифта по таблице шрифтов
TypographyVariants - определяет семантику шрифта, т.е будет это h1 тег или p

variant делаем ОБЯЗАТЕЛЬНО через специальный тип TypographyVariants
size делаем ОБЯЗАТЕЛЬНО через специальный тип TypographySize

Принимает variant, size, и children

Пример применения:
<Typography variant={TypographyVariants.h1} size={TypographySize.Body_M}>
    Some Text
</Typography>

Выхлоп:
<h1>Some text</h1> со стилями для Body 3 => Body M
*/
}

export enum TypographySize {
  Heading_S = 'heading_s',
  Heading_M = 'heading_m',
  Heading_L = 'heading_l',
  Heading_XL = 'heading_xl',
  Body_M = 'body_m',
  Body_L = 'body_l',
  Body_XL = 'body_xl',
  Caption = 'caption'
}

export enum TypographyVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p'
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
          [styles[size]]: size
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
