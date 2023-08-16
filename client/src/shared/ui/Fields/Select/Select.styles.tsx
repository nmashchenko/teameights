import { StylesConfig } from 'react-select';
import { getCSSVariable } from 'shared/lib';

const _focusAndActiveStyles = {
  boxShadow: 'none',
  borderBottom: `1px solid ${getCSSVariable('--white-color')}`,
};

export const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    outline: 'none',
    border: 'none',
    borderRadius: 0,
    width: '100%',
    overflow: 'hidden',
    background: 'inherit',
    cursor: 'text',
    padding: '8px 4px',
    borderBottom: `1px solid ${getCSSVariable('--grey-normal-color')}`,
    // This line disable the blue border
    boxShadow: 'none',
    ':active': { ..._focusAndActiveStyles },
    ':focus': { ..._focusAndActiveStyles },
    ':focus-within': { ..._focusAndActiveStyles },
    caretColor: getCSSVariable('--green-bright-color'),
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: 0,
    cursor: 'pointer',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: getCSSVariable('--white-color'),
    padding: 0,
    margin: 0,
  }),
  input: (styles) => ({
    ...styles,
    color: getCSSVariable('--white-color'),
    padding: 0,
    margin: 0,
  }),
  menu: () => ({
    padding: 0,
    margin: 0,
    background: 'transparent',
    paddingTop: '8px',
    maxHeight: '300px',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    borderRadius: '5px',
    overflowY: 'auto',
    boxShadow: '0 4px 24px 0 rgb(17 20 27 / 25%)',
    background: getCSSVariable('--grey-dark-color'),
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    cursor: 'pointer',
    background:
      isFocused && !isSelected
        ? getCSSVariable('--green-dark-color')
        : isSelected
        ? getCSSVariable('--green-active-color')
        : undefined,

    ':active': {
      background: getCSSVariable('--green-dark-color'),
    },
  }),
};
