import { SVGPropsWithSize } from '@/shared/types/svg-props-with-size';
import { FC } from 'react';
export const Plus: FC<SVGPropsWithSize> = ({ size = '20', ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='#ffffff'
      viewBox='0 0 256 256'
      {...rest}
    >
      <path d='M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z'></path>
    </svg>
  );
};
