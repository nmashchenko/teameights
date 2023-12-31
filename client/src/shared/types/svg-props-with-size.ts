import { SVGProps } from 'react';

export type SVGPropsWithSize = SVGProps<SVGSVGElement> & {
  size?: '16' | '20' | '24' | '28';
};
