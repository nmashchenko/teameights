import type { CSSProperties, PropsWithChildren } from 'react';
import React, { memo } from 'react';
import { clsx } from 'clsx';

import cls from './Skeleton.module.css';

export interface SkeletonProps {
  count?: number;
  inline?: boolean;
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  containerTestId?: string;
  skeletonTestId?: string;
  containerClassName?: string;
  style?: CSSProperties;
}

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
        className={clsx(cls.reactLoadingSkeleton, {}, [className])}
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
    <span aria-live='polite' className={containerClassName} data-testid={containerTestId}>
      {Wrapper
        ? elements.map((element, index) => <Wrapper key={index}>{element}</Wrapper>)
        : elements}
    </span>
  );
});
