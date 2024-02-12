import ContentLoader from 'react-content-loader';
import { ImageProps } from 'next/image';
import { CSSProperties, FC } from 'react';
import styles from './skeleton-loader.module.scss';

interface SkeletonLoaderProps extends Pick<ImageProps, 'width' | 'height'> {
  borderRadius: string;
  debug?: boolean;
}
export const SkeletonLoader: FC<SkeletonLoaderProps> = props => {
  const { height, width, borderRadius, debug } = props;

  const style = {
    borderRadius: borderRadius,
    zIndex: debug ? 99 : 'auto',
  } as CSSProperties;

  return (
    <ContentLoader
      width={'100%'}
      height={'100%'}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor='#313131'
      foregroundColor='#525252'
      speed={1.8}
      style={style}
      className={styles.absolute}
      uniqueKey='image-content-loader'
    >
      <rect x='0' y='0' width={width} height={height} />
    </ContentLoader>
  );
};
