'use client';

/**
 * Drawer Component
 *
 * A customizable drawer component powered by `react-modern-drawer`. It provides a sliding drawer that can be utilized for additional navigation or content display, overlaying it on the current screen without navigating away.
 *
 * Props:
 *
 * @prop {boolean} open - Determines whether the drawer is visible (open) or not.
 * @prop {function} onClose - Callback function that gets triggered when the drawer is requested to be closed.
 * @prop {boolean} [isFullHeight=false] - Specifies whether the drawer should cover full height of the viewport. Default is `false`.
 * @prop {string} [className] - Class for drawer content
 * @prop {string} [overlayClassName] - Class for drawer overlay
 * @prop {ReactNode} [children] - Content to be displayed inside the drawer.
 *
 * Usage:
 *
 * ```tsx
 * import { Drawer } from '@/shared/ui';
 *
 * <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} isFullHeight>
 *   <p>Drawer content here</p>
 * </Drawer>
 * ```
 *
 * Note:
 * - The component is designed to slide from the bottom towards the top. This is hardcoded and not customizable via props.
 * - Styling for the drawer can be adjusted through CSS variables or directly modifying inline styles in the component. Particularly, the `--cards-color` CSS variable is used for the background color.
 * - Ensure proper installation and import of `react-modern-drawer` and its CSS file as shown in the component code snippet.
 * - Conditional styling is applied based on `isFullHeight` prop for the `borderRadius` and `height` CSS properties.
 *
 * Styling:
 * To further customize the drawer's appearance, consider adjusting the CSS variables or modifying the styles directly in the component's `style` object. Be mindful of the UI/UX impact that may come with stylistic changes.
 */

import React, { FC, PropsWithChildren } from 'react';
import DrawerComponent from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  isFullHeight?: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  overlayClassName?: string;
}
export const Drawer: FC<PropsWithChildren<DrawerProps>> = props => {
  const {
    open,
    onClose,
    isFullHeight,
    direction = 'bottom',
    className,
    overlayClassName,
    children,
  } = props;

  const style = {
    borderRadius: isFullHeight ? '0' : '15px 15px 0 0',
    minHeight: '250px',
    height: isFullHeight ? '100dvh' : 'auto',
    background: 'var(--cards-color)',
  } as React.CSSProperties;

  return (
    <DrawerComponent
      zIndex={999}
      open={open}
      onClose={onClose}
      direction={direction}
      style={style}
      className={className}
      overlayClassName={overlayClassName}
      customIdSuffix='t8s-drawer'
      lockBackgroundScroll
    >
      {children}
    </DrawerComponent>
  );
};
