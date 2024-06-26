'use client';

import { CrownIcon20, CrownIcon28, CrownIcon40 } from '@/shared/assets';
import { CSSProperties, FC, SyntheticEvent, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { SkeletonLoader } from './ui/skeleton-loader';
import styles from './image-loader.module.scss';

interface ImageLoaderProps extends ImageProps {
  fallback?: string;
  borderRadius?: string;
  crownSize?: 20 | 28 | 40;
  debug?: boolean;
}
export const ImageLoader: FC<ImageLoaderProps> = props => {
  const {
    crownSize,
    borderRadius = '0',
    width,
    height,
    src,
    fallback = '/images/placeholder.png',
    debug,
    sizes = '100%',
    alt,
    ...rest
  } = props;
  const [loading, setLoading] = useState(true);
  const [onErrorSrc, setOnErrorSrc] = useState<string | undefined>(undefined);

  function handleOnError(e: SyntheticEvent<HTMLImageElement, Event>): void {
    console.log('error occurred');
    if (e?.currentTarget?.src !== fallback) {
      setOnErrorSrc(fallback);
    }
  }

  const style = {
    borderRadius: borderRadius,
    objectFit: 'cover',
    userSelect: 'none',
  } as CSSProperties;

  const imageStyle = {
    width: width,
    height: height,
  } as CSSProperties;

  return (
    <div className={styles.relative}>
      {loading && (
        <SkeletonLoader borderRadius={borderRadius} debug={debug} width={width} height={height} />
      )}
      <div>
        <div style={imageStyle} className={styles.relative}>
          <Image
            {...rest}
            src={onErrorSrc || src}
            onLoadingComplete={() => !debug && setLoading(false)}
            onError={e => handleOnError(e)}
            style={style}
            fill
            sizes={sizes}
            alt={alt}
            placeholder='empty'
          />
        </div>
        {crownSize && (
          <div className={styles.crown_container}>
            {crownSize === 20 && <CrownIcon20 />}
            {crownSize === 28 && <CrownIcon28 />}
            {crownSize === 40 && <CrownIcon40 />}
          </div>
        )}
      </div>
    </div>
  );
};
