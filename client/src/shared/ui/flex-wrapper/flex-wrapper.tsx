import React from 'react';
import styles from './FlexWrapper.module.scss';

interface FlexWrapperProps {
  align?: string;
  justify?: string;
  gap?: string | number;
  margin?: string | number;
  padding?: string | number;
  direction?: 'row' | 'column';
  maxHeight?: string;
  position?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  children: React.ReactNode;
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
  const {
    align,
    justify,
    gap,
    margin,
    padding,
    direction,
    maxHeight,
    position,
    width,
    maxWidth,
    height,
    children,
  } = props;

  const style = {
    '--align': align,
    '--justify': justify,
    '--gap': gap,
    '--margin': margin,
    '--padding': padding,
    '--direction': direction,
    '--maxHeight': maxHeight,
    '--position': position,
    '--width': width,
    '--maxWidth': maxWidth,
    '--height': height,
  } as React.CSSProperties;

  return (
    <div className={styles.flexWrapper} style={style}>
      {children}
    </div>
  );
};

export default FlexWrapper;
