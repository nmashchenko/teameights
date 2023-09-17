import React from 'react';

export const SidebarNotificationClose: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg viewBox='0 0 16 16' fill='none' {...props}>
      <path
        d='M14.75 1.25L1.25 14.75M14.75 14.75L1.25 1.25'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
