import { render, screen } from '@testing-library/react';

import { Skeleton } from './skeleton';

describe('Skeleton component', () => {
  it('should render with provided height and width', () => {
    const height = 100;
    const width = 200;
    render(<Skeleton height={height} skeletonTestId='skeleton123-test' width={width} />);
    const skeletonContainer = screen.getByTestId('skeleton123-test');
    expect(skeletonContainer).toHaveStyle(`height: ${height}px`);
    expect(skeletonContainer).toHaveStyle(`width: ${width}px`);
  });
  it('should render with provided border radius', () => {
    const borderRadius = '50%';
    render(<Skeleton borderRadius={borderRadius} skeletonTestId='skeleton1234-test' />);
    const skeletonContainer = screen.getByTestId('skeleton1234-test');
    expect(skeletonContainer).toHaveStyle(`border-radius: ${borderRadius}`);
  });
  it('should render with the provided className', () => {
    const className = 'custom-class';
    render(<Skeleton className={className} skeletonTestId='skeleton12345-test' />);
    const skeletonContainer = screen.getByTestId('skeleton12345-test');
    expect(skeletonContainer).toHaveClass(className);
  });
  it('should render without any provided props', () => {
    render(<Skeleton skeletonTestId='skeleton123456-test' />);
    const skeletonContainer = screen.getByTestId('skeleton123456-test');
    expect(skeletonContainer).toBeInTheDocument();
  });
});
