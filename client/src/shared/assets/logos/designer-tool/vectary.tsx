import { FC, SVGProps } from 'react';
export const Vectary: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5655_49890)'>
        <mask
          id='mask0_5655_49890'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <path d='M24 0H0V24H24V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_5655_49890)'>
          <mask
            id='mask1_5655_49890'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <path d='M24 0H0V24H24V0Z' fill='white' />
          </mask>
          <g mask='url(#mask1_5655_49890)'>
            <path
              d='M1.90711 2.6797C3.3495 2.58902 4.97278 2.9755 6.32295 3.80598C7.67312 4.63646 8.75016 5.91093 9.31976 7.2392C9.918 8.5548 10.1346 10.2094 9.83912 11.7667C9.54368 13.3241 8.73608 14.7842 7.69754 15.7894C7.26205 16.242 6.52085 16.4682 5.90684 16.3358C5.28702 16.2341 4.68018 15.7521 4.44074 15.1714L0.170375 5.50323C-0.0975889 4.93515 -0.0451201 4.16198 0.297137 3.63531C0.612836 3.0923 1.27923 2.69676 1.90711 2.6797Z'
              fill='white'
            />
            <path
              d='M23.9614 3.72853C24.0121 3.61821 24.0131 3.47649 23.9639 3.3655C23.918 3.25309 23.8153 3.15547 23.7007 3.11549C22.1272 2.49853 20.0016 2.49205 18.2038 3.25661C16.406 4.02118 14.9361 5.5568 14.289 7.11808L8.17251 20.9701C8.12179 21.0803 8.12083 21.2221 8.17003 21.333C8.21587 21.4454 8.31859 21.5431 8.43323 21.583C10.0067 22.2 12.1323 22.2065 13.9302 21.4419C15.7279 20.6774 17.1979 19.1418 17.8449 17.5805L23.9614 3.72853Z'
              fill='white'
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id='clip0_5655_49890'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
