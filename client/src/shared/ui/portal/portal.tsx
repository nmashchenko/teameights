'use client';

import { useRef, useEffect, useState, ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = props => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(<div>{props.children}</div>, ref.current) : null;
};
