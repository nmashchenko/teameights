import { SVGPropsWithSize } from '@/shared/types/svg-props-with-size';
import { FC } from 'react';
export const CaretUpIcon: FC<SVGPropsWithSize> = ({ size = '24', ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='#5bd424'
      viewBox='0 0 256 256'
      {...rest}
    >
      <path d='M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z'></path>
    </svg>
  );
};
