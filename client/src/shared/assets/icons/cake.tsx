
import { SVGPropsWithSize } from '@/shared/types/svg-props-with-size';
import { FC } from 'react';

export const Cake: FC<SVGPropsWithSize> = ({ size = '24', ...rest }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M12 8.25V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6C16.3312 4.5 12 0.75 12 0.75C12 0.75 7.5 4.5 12 6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.1875 11.8125C15.1875 12.6579 14.8517 13.4686 14.2539 14.0664C13.6561 14.6642 12.8454 15 12 15C11.1546 15 10.3439 14.6642 9.7461 14.0664C9.14832 13.4686 8.8125 12.6579 8.8125 11.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.81252 11.8125C8.8127 12.6466 8.4859 13.4476 7.90224 14.0435C7.31859 14.6395 6.5246 14.9828 5.69064 15C3.90002 15.0375 2.43752 13.5375 2.43752 11.7469V10.5C2.43628 10.2042 2.49363 9.91106 2.60626 9.63752C2.7189 9.36397 2.88458 9.11544 3.09376 8.90626C3.30294 8.69708 3.55147 8.5314 3.82502 8.41876C4.09856 8.30613 4.3917 8.24878 4.68752 8.25002H19.3125C19.6083 8.24878 19.9015 8.30613 20.175 8.41876C20.4486 8.5314 20.6971 8.69708 20.9063 8.90626C21.1155 9.11544 21.2811 9.36397 21.3938 9.63752C21.5064 9.91106 21.5638 10.2042 21.5625 10.5V11.7469C21.5625 13.5375 20.1 15.0375 18.3094 15C17.4754 14.9828 16.6814 14.6395 16.0978 14.0435C15.5141 13.4476 15.1873 12.6466 15.1875 11.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.25 14.3721V19.5002C20.25 19.6991 20.171 19.8899 20.0303 20.0305C19.8897 20.1712 19.6989 20.2502 19.5 20.2502H4.5C4.30109 20.2502 4.11032 20.1712 3.96967 20.0305C3.82902 19.8899 3.75 19.6991 3.75 19.5002V14.3721" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
