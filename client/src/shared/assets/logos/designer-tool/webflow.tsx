import { FC, SVGProps } from 'react';
export const Webflow: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width='24'
      height='16'
      viewBox='0 0 24 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5561_14561)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24 0.531128L16.3326 15.4689H9.1455L12.3418 9.27247H12.194C9.57044 12.7026 5.61663 14.9525 0 15.4689V9.36468C0 9.36468 3.60277 9.16182 5.70901 6.93038H0V0.531128H6.41109V5.80544H6.55889L9.18245 0.531128H14.0416V5.76856H14.1894L16.8868 0.531128H24Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_5561_14561'>
          <rect width='24' height='14.9377' fill='white' transform='translate(0 0.531128)' />
        </clipPath>
      </defs>
    </svg>
  );
};
