import React from 'react';
import styles from './icon-wrapper.module.scss';

interface IconWrapperProps {
  cursor?: string;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  children: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = props => {
  const {
    cursor = 'default',
    width = 'auto',
    height = 'auto',
    padding = 0,
    margin = 0,
    children,
  } = props;

  const style = {
    '--cursor': cursor,
    '--width': width,
    '--height': height,
    '--padding': `${padding}`,
    '--margin': `${margin}`,
    '--svg-width': width,
    '--svg-height': height,
  } as React.CSSProperties;

  return (
    <div className={styles.iconWrapper} style={style}>
      {children}
    </div>
  );
};
