import React from 'react';
import { InfinitySpin } from '../infinity-spinner/infinity-spinner';
import styles from './loader.module.scss';

export interface LoaderProps {
  paddingLeft?: string;
}

export const Loader: React.FC<LoaderProps> = props => {
  const { paddingLeft = '0' } = props;

  const style = {
    '--padding-left': paddingLeft,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <InfinitySpin width='200' color='#4fa94d' />
    </div>
  );
};
