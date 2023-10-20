import { Crown } from '@/shared/assets';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { FC, useState } from 'react';

interface ImageLoaderProps {
  imgLoading: boolean;
  shouldHaveCrown: boolean;
  imageSize: string;
}

export const ImageLoader: FC<ImageLoaderProps> = ({ imgLoading, shouldHaveCrown, imageSize }) => {
  const [loading, setLoading] = useState<boolean>(imgLoading);

  const onImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={loading ? 'visible_container' : 'hidden_container'}>
      {shouldHaveCrown && (
        <div className='crown_container'>
          <Crown />
        </div>
      )}
      <Skeleton width={imageSize} height={imageSize} borderRadius='50%' />
      <div className={loading ? 'visible_container' : 'hidden_container'}>
        <div className='team_card_top_icon'>
          <img onLoad={onImageLoad} />
        </div>
      </div>
    </div>
  );
};
