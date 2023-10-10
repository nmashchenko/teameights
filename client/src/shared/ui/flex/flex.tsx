import React from 'react';

import styles from './flex.module.scss';

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
  height?: string;

  /**
   * [props.flexWrap] - The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in. Default is 'nowrap'

   */
  flexWrap?: string;

  /**
   * [props.flexShrink] - Sets the flex shrink factor. Negative numbers are invalid. Default is 'nowrap'

   */
  flexShrink?: string | number;

  /**
   * props.children - The content to be laid out.
   */
  children: React.ReactNode;
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
 *   flexWrap="wrap"
 *   flexShrink={1}
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
    height,
    flexWrap,
    flexShrink,
    children,
  } = props;

  const style = {
    '--align': align,
    '--justify': justify,
    '--gap': gap,
    '--margin': margin,
    '--padding': padding,
    '--direction': direction,
    '--maxHeight': maxHeight,
    '--position': position,
    '--width': width,
    '--maxWidth': maxWidth,
    '--height': height,
    '--flex-wrap': flexWrap,
    '--flex-shrink': flexShrink,
  } as React.CSSProperties;

  return (
    <div className={styles.flexWrapper} style={style}>
      {children}
    </div>
  );
};
