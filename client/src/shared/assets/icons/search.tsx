import { SVGPropsWithSize } from '@/shared/types/svg-props-with-size';
import { FC } from 'react';

interface WithColor {
  color?: 'white' | '#5BD424';
}

export const SearchIcon: FC<SVGPropsWithSize & WithColor> = ({
  size = '20',
  color = 'white',
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7802 11.7804C12.0243 11.5364 12.42 11.5364 12.6641 11.7804L17.1085 16.2249C17.3526 16.469 17.3526 16.8647 17.1085 17.1088C16.8645 17.3528 16.4687 17.3528 16.2246 17.1088L11.7802 12.6643C11.5361 12.4203 11.5361 12.0245 11.7802 11.7804Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.51844 3.9585C5.99992 3.9585 3.95825 6.00016 3.95825 8.51868C3.95825 11.0372 5.99992 13.0789 8.51844 13.0789C11.037 13.0789 13.0786 11.0372 13.0786 8.51868C13.0786 6.00016 11.037 3.9585 8.51844 3.9585ZM2.70825 8.51868C2.70825 5.3098 5.30956 2.7085 8.51844 2.7085C11.7273 2.7085 14.3286 5.3098 14.3286 8.51868C14.3286 11.7276 11.7273 14.3289 8.51844 14.3289C5.30956 14.3289 2.70825 11.7276 2.70825 8.51868Z'
        fill={color}
      />
    </svg>
  );
};
