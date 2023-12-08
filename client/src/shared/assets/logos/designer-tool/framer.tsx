import { FC, SVGProps } from 'react';
export const Framer: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width='16'
      height='24'
      viewBox='0 0 16 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0H16V8H8L0 0ZM0 8H8L16 16H0V8ZM0 16H8V24L0 16Z' fill='white' />
    </svg>
  );
};
