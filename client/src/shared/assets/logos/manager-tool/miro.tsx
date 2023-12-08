import { FC, SVGProps } from 'react';
export const Miro: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5333 0H14L16.9333 5.13333L10.5333 0H7L10.2 6.26667L3.53333 0H0L3.53333 8L0 24H3.53333L10.2667 6.86667L7 24H10.5333L17 5.73333L14.0667 24H17.6L24 4L17.5333 0Z'
        fill='white'
      />
    </svg>
  );
};
