import { Crown } from '@/shared/assets';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { CSSProperties, FC, useState } from 'react';
import styles from './image-loader.module.scss';

interface ImageLoaderProps {
  src: string;
  alt: string;
  borderRadius: string;
  shouldHaveCrown: boolean;
  imageSize: string;
}

export const ImageLoader: FC<ImageLoaderProps> = ({
  shouldHaveCrown,
  imageSize,
  src,
  borderRadius,
  alt,
}) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => setLoading(false);

  const style = {
    width: imageSize,
    height: imageSize,
    borderRadius: borderRadius,
  } as CSSProperties;

  return (
    <>
      <div className={loading ? styles.visible_container : styles.hidden_container}>
        {shouldHaveCrown && (
          <div className='crown_container'>
            <Crown />
          </div>
        )}
        <Skeleton width={imageSize} height={imageSize} borderRadius='50%' />
      </div>
      <div className={loading ? styles.hidden_container : styles.visible_container}>
        {shouldHaveCrown && (
          <div className='crown_container'>
            <Crown />
          </div>
        )}
        <img onLoad={onImageLoad} src={src} style={style} alt={alt} className={styles.image} />
      </div>
    </>
  );
};
