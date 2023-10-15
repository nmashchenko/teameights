import React from 'react';
import styles from './icon-wrapper.module.scss';

export interface IconWrapperProps {
  /**
   * [cursor='default'] - The CSS cursor property to be applied on the wrapper.
   */
  cursor?: string;
  /**
   * [width='auto'] - The width of the wrapper.
   */
  width?: string | number;
  /**
   * [height='auto'] - The height of the wrapper.
   */
  height?: string | number;
  /**
   * [padding=0] - The padding of the wrapper.
   */
  padding?: string | number;
  /**
   * [margin=0] - The margin of the wrapper.
   */
  margin?: string | number;
  /**
   * The content to be wrapped, typically an SVG icon.
   */
  children: React.ReactNode;
}

/**
 * A component to wrap an icon (or any content) with a styled div, providing control over cursor, dimensions, padding, and margin.
 *
 * Example for usage:
 *
 * ```tsx
 * // Importing a sample SVG icon for demonstration
 * import { ReactComponent as SampleIcon } from 'path-to-your-icon.svg';  // replace with the path to your icon file
 *
 * <IconWrapper cursor="pointer" width={40} height={40} padding={10} margin={5}>
 *   <SampleIcon />
 * </IconWrapper>
 * ```
 */
export const IconWrapper: React.FC<IconWrapperProps> = props => {
  const {
    cursor = 'default',
    width = 'auto',
    height = 'auto',
    padding = 0,
    margin = 0,
    children,
  } = props;

  const style = {
    '--cursor': cursor,
    '--width': width,
    '--height': height,
    '--padding': `${padding}`,
    '--margin': `${margin}`,
    '--svg-width': width,
    '--svg-height': height,
  } as React.CSSProperties;

  return (
    <div className={styles.iconWrapper} style={style}>
      {children}
    </div>
  );
};
