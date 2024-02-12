import { FC, ReactNode } from 'react';
import styles from './selectable-block.module.scss';
import { Flex } from '@/shared/ui';
import { clsx } from 'clsx';

interface SelectableBlockProps {
  children: ReactNode;
  text: string;
  gap?: string;
  padding?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const SelectableBlock: FC<SelectableBlockProps> = ({
  children,
  text,
  gap = '24px',
  padding = '32px',
  selected = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      gap={gap}
      padding={padding}
      width='100%'
      className={clsx(styles.container, { [styles.selected]: selected })}
      onClick={handleClick}
    >
      {children}
      {text}
    </Flex>
  );
};
