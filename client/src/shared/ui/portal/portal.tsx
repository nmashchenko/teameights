'use client';

import { useEffect, useState, ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = props => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(<div>{props.children}</div>, document.body) : null;
};
