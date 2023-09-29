import type { CSSProperties, PropsWithChildren } from 'react';
import React, { memo } from 'react';

import cls from './skeleton.module.scss';
import { clsx } from 'clsx';

export interface SkeletonProps {
  /**
   * The number of skeleton elements to render
   */
  count?: number;
  /**
   * [props.inline=false] - Whether the skeleton elements should be rendered inline
   */
  inline?: boolean;
  /**
   * [props.wrapper] - An optional wrapper component for the skeleton elements
   */
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  /**
   * [props.className] - A custom class name for the skeleton elements
   */
  className?: string;
  /**
   * [props.height] - The height of the skeleton elements
   */
  height?: string | number;
  /**
   * [props.width] - The width of the skeleton elements
   */
  width?: string | number;
  /**
   * [props.borderRadius] - The border radius of the skeleton elements
   */
  borderRadius?: string;
  /**
   * [props.containerTestId] - The data-testid attribute for the container element
   */
  containerTestId?: string;
  /**
   * [props.skeletonTestId] - The data-testid attribute for the skeleton elements
   */
  skeletonTestId?: string;
  /**
   * [props.containerClassName] - A custom class name for the container element
   */
  containerClassName?: string;
  /**
   * [props.style] - Custom styles for the skeleton elements
   */
  style?: CSSProperties;
}

/**
 * `Skeleton` is a presentational component that renders a skeleton screen placeholder UI.
 * This is typically used to indicate that content is being loaded and provides a better user experience by reducing the perceived loading time.
 *
 * The skeleton elements are customizable in terms of dimensions, appearance, and behavior.
 *
 * Example:
 *
 * ```tsx
 * // Basic usage
 * <Skeleton count={5} />
 * ```
 *
 * ```tsx
 * // Inline skeleton elements with custom dimensions
 * <Skeleton count={3} inline width={200} height={20} />
 * ```
 *
 * ```tsx
 * // Skeleton elements with custom wrapper component
 * const Wrapper = ({ children }) => <div style={{ padding: '10px' }}>{children}</div>;
 * <Skeleton count={3} wrapper={Wrapper} />
 * ```
 *
 * ```tsx
 * // Skeleton elements with custom styles and class names
 * <Skeleton count={3} className="my-skeleton" style={{ backgroundColor: 'gray' }} />
 * ```
 *
 * ISSUES:
 * If you have a problem where your outer span is not the same height as internal,
 * wrap skeleton into any element with display: block, inline-block, flex, etc
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const {
    skeletonTestId,
    containerClassName,
    count = 1,
    containerTestId,
    wrapper: Wrapper,
    inline,
    className,
    borderRadius,
    height,
    width,
    style,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  const elements: React.ReactElement[] = [];

  const countCeil = Math.ceil(count);

  for (let i = 0; i < countCeil; i++) {
    const thisStyle = { ...styles, ...style };
    const skeletonSpan = (
      <span
        key={i}
        className={clsx(cls.react_loading_skeleton, {}, [className])}
        data-testid={skeletonTestId}
        style={thisStyle}
      >
        &zwnj;
      </span>
    );

    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(
        <React.Fragment key={i}>
          {skeletonSpan}
          <br />
        </React.Fragment>
      );
    }
  }

  return (
    <span
      aria-live='polite'
      className={clsx(cls.baseSpan, {}, [containerClassName])}
      data-testid={containerTestId}
    >
      {Wrapper
        ? elements.map((element, index) => <Wrapper key={index}>{element}</Wrapper>)
        : elements}
    </span>
  );
});
