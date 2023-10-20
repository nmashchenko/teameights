import { ClearIndicatorProps } from 'react-select';
import { X } from '@/shared/assets';
import { CSSProperties } from 'react';
import { OptionType } from '../select-autocomplete';

export const ClearIndicator = (props: ClearIndicatorProps<OptionType>) => {
  const {
    children = <X />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props) as CSSProperties}>
      {children}
    </div>
  );
};
