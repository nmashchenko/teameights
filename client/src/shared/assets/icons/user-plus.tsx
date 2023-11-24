import { FC } from 'react';
import { SVGPropsWithSize } from '@/shared/types/svg-props-with-size';

export const UserPlus: FC<SVGPropsWithSize> = ({ size = '20', ...rest }) => {
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
        d='M1.3677 13.0344C2.11003 12.292 3.11685 11.875 4.16666 11.875H9.99999C11.0498 11.875 12.0566 12.292 12.799 13.0344C13.5413 13.7767 13.9583 14.7835 13.9583 15.8333V17.5C13.9583 17.8452 13.6785 18.125 13.3333 18.125C12.9881 18.125 12.7083 17.8452 12.7083 17.5V15.8333C12.7083 15.115 12.423 14.4262 11.9151 13.9183C11.4072 13.4103 10.7183 13.125 9.99999 13.125H4.16666C3.44837 13.125 2.75949 13.4103 2.25158 13.9183C1.74367 14.4262 1.45833 15.115 1.45833 15.8333V17.5C1.45833 17.8452 1.17851 18.125 0.833328 18.125C0.48815 18.125 0.208328 17.8452 0.208328 17.5V15.8333C0.208328 14.7835 0.625366 13.7767 1.3677 13.0344Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.08333 3.125C5.58756 3.125 4.37499 4.33756 4.37499 5.83333C4.37499 7.3291 5.58756 8.54167 7.08333 8.54167C8.5791 8.54167 9.79166 7.3291 9.79166 5.83333C9.79166 4.33756 8.5791 3.125 7.08333 3.125ZM3.12499 5.83333C3.12499 3.64721 4.8972 1.875 7.08333 1.875C9.26945 1.875 11.0417 3.64721 11.0417 5.83333C11.0417 8.01946 9.26945 9.79167 7.08333 9.79167C4.8972 9.79167 3.12499 8.01946 3.12499 5.83333Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.6667 6.04167C17.0118 6.04167 17.2917 6.32149 17.2917 6.66667V11.6667C17.2917 12.0118 17.0118 12.2917 16.6667 12.2917C16.3215 12.2917 16.0417 12.0118 16.0417 11.6667V6.66667C16.0417 6.32149 16.3215 6.04167 16.6667 6.04167Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5417 9.16667C13.5417 8.82149 13.8215 8.54167 14.1667 8.54167H19.1667C19.5118 8.54167 19.7917 8.82149 19.7917 9.16667C19.7917 9.51185 19.5118 9.79167 19.1667 9.79167H14.1667C13.8215 9.79167 13.5417 9.51185 13.5417 9.16667Z'
        fill='white'
      />
    </svg>
  );
};
