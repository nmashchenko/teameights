import { ClearIndicatorProps } from 'react-select';
import { XIcon } from '@/shared/assets';
import { CSSProperties } from 'react';
import { OptionType } from '../select-autocomplete';

export const ClearIndicator = (props: ClearIndicatorProps<OptionType>) => {
  const {
    children = <XIcon />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props) as CSSProperties}>
      {children}
    </div>
  );
};
