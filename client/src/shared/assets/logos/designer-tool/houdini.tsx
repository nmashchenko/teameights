import { FC, SVGProps } from 'react';
export const Houdini: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5655_49901)'>
        <path
          d='M0 19.6323V23.997H3.82355C2.08526 23.0248 0.734973 21.4834 0 19.6323Z'
          fill='white'
        />
        <path
          d='M16.0424 15.0784C16.0424 11.0419 12.7895 7.15925 7.93099 6.99069C4.48299 6.87241 1.80088 8.1351 0 10.004V14.212C1.22425 10.6634 4.59536 9.05476 7.41941 9.08433C10.9502 9.12573 13.6708 11.7871 13.6944 14.8034C13.6944 17.6807 12.5116 19.795 9.25873 20.3184C7.48446 20.6142 4.71069 19.5644 4.82306 16.8852C4.88811 15.5042 5.96155 14.7236 7.18875 14.7797C5.98225 16.3973 7.57909 17.5801 8.70871 17.3406C9.27505 17.215 9.78042 16.8972 10.1389 16.4411C10.4974 15.985 10.6869 15.4189 10.6752 14.8389C10.6752 13.8216 9.71709 12.1775 7.34252 12.2396C4.4061 12.3076 2.55791 14.4219 2.49285 17.036C2.42188 20.3155 5.50024 22.4919 8.66731 22.5185C13.2982 22.5777 16.0601 19.5348 16.0424 15.0784Z'
          fill='white'
        />
        <path
          d='M0 0V6.90488C2.27962 5.17687 5.0707 4.259 7.93099 4.2967C14.7324 4.2967 19.0645 9.05766 19.0616 15.0606C19.0616 19.2302 17.1158 22.3677 14.067 23.997H24V0H0Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_5655_49901'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
