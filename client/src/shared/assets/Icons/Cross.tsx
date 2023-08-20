import { FC } from 'react';

interface CrossProps {
  className?: string;
}

export const Cross: FC<CrossProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.625 20.375L20.375 31.625M31.625 31.625L20.375 20.375"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
