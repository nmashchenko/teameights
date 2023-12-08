import { FC, SVGProps } from 'react';
export const Aseprite: FC<SVGProps<SVGSVGElement>> = props => {
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
        d='M4.00608 0V1.6H19.9941V0H4.00608ZM19.9941 1.6V3.2H21.5941V1.6H19.9941ZM21.5941 3.2V17.6H19.9941V19.2H4.00608V17.6H2.40608V3.2H0.809082V20.8H2.40808V22.4H4.00708V24H19.9951V22.4H21.5951V20.8H23.1931V3.2H21.5941ZM2.40708 3.2H4.00608V1.6H2.40608L2.40708 3.2ZM7.20308 6.4V12.8H8.80308V6.4H7.20308ZM15.1981 6.4V12.8H16.7971V6.4H15.1981Z'
        fill='white'
      />
    </svg>
  );
};
