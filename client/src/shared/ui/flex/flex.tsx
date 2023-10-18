import React from 'react';

import styles from './flex.module.scss';
import clsx from 'clsx';

export interface FlexProps {
  /**
   * [props.align] - The align-items property defines the default behavior for how items are laid out along the cross axis (perpendicular to the main axis). Default is 'normal'.
   */
  align?: string;
  /**
   * [props.justify] - The justify-content property defines how the browser distributes space between and around content items along the main axis of their container. Default is 'normal'.
   */
  justify?: string;
  /**
   * [props.gap] - The gap property defines the space between flex items. Default is 0.
   */
  gap?: string | number;
  /**
   * [props.margin] - The margin property defines the space around the component. Default is 0.
   */
  margin?: string | number;
  /**
   * [props.padding] - The padding property defines the space inside the component. Default is 0.
   */
  padding?: string | number;
  /**
   * [props.direction] - The flex-direction property defines in which direction the container wants to stack the flex items. Default is 'row'.
   */
  direction?: 'row' | 'column';
  /**
   * [props.maxHeight] - The max-height property defines the maximum height of the component. Default is 'none'.
   */
  maxHeight?: string;
  /**
   * [props.position] - The position property specifies the type of positioning method used for an element. Default is 'static'.
   */
  position?: string;
  /**
   * [props.width] - The width property defines the width of the component. Default is 'auto'.
   */
  width?: string;
  /**
   * [props.maxWidth] - The max-width property defines the maximum width of the component. Default is 'none'.
   */
  maxWidth?: string;
  /**
   * [props.height] - The height property defines the height of the component. Default is 'auto'.
   */
  wrap?: string;
  /**
   * [props.wrap] - The wrap property defines the wrap of the component. Default is 'none'.
   */
  height?: string;

  /**
   * [props.flexShrink] - Sets the flex shrink factor. Negative numbers are invalid. Default is 'nowrap'

   */
  shrink?: string | number;

  /**
   * [props.className] - adds additional classes to base

   */
  className?: string;

  /**
   * props.children - The content to be laid out.
   */
  children: React.ReactNode;

  /**
   * props.className - Additional classnames you want to add to flex if needed
   */
  className?: string;
}

/**
 * The `Flex` component is a flexible box layout component that provides a more efficient way to lay out, align, and distribute space among items in a container, even when their sizes are unknown or dynamic.
 *
 * Example usage:
 *
 * ```tsx
 * <Flex
 *   align="center"
 *   justify="space-between"
 *   gap={10}
 *   margin={20}
 *   padding={20}
 *   direction="row"
 *   maxHeight="500px"
 *   position="relative"
 *   width="100%"
 *   maxWidth="500px"
 *   height="auto"
 *   wrap="wrap"
 *   shrink={1}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 * ```
 */
export const Flex: React.FC<FlexProps> = props => {
  const {
    align,
    justify,
    gap,
    margin,
    padding,
    direction,
    maxHeight,
    position,
    width,
    maxWidth,
    wrap,
    height,
    shrink,
    children,
    className,
  } = props;

  const style = {
    alignItems: align,
    justifyContent: justify,
    gap: gap,
    margin: margin,
    padding: padding,
    flexDirection: direction,
    maxHeight: maxHeight,
    position: position,
    width: width,
    maxWidth: maxWidth,
    flexWrap: wrap,
    height: height,
    flexShrink: shrink,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.flexWrapper, [className])} style={style}>
      {children}
    </div>
  );
};
