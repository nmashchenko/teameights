import { Crown20 } from '@/shared/assets';
import { CSSProperties, FC, SyntheticEvent, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { SkeletonLoader } from './ui/skeleton-loader';
import styles from './image-loader.module.scss';

interface ImageLoaderProps extends ImageProps {
  fallback?: string;
  borderRadius: string;
  shouldHaveCrown?: boolean;
  debug?: boolean;
}
export const ImageLoader: FC<ImageLoaderProps> = props => {
  const {
    shouldHaveCrown = false,
    borderRadius,
    width,
    height,
    src,
    fallback = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
    debug,
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

  return (
    <div className={styles.relative}>
      {loading && (
        <SkeletonLoader borderRadius={borderRadius} debug={debug} width={width} height={height} />
      )}
      <div>
        <Image
          {...rest}
          src={onErrorSrc || src}
          onLoadingComplete={() => !debug && setLoading(false)}
          onError={e => handleOnError(e)}
          style={style}
          width={width}
          placeholder='empty'
          height={height}
        />
        {shouldHaveCrown && (
          <div className={styles.crown_container}>
            <Crown20 />
          </div>
        )}
      </div>
    </div>
  );
};
