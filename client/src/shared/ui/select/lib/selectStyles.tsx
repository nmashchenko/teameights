import type { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';

const _colors = {
  green: {
    active: '#1c8111',
    bright: '#5bd424',
    dark: '#064006',
  },
  grey: {
    dark: '#2f3239',
    medium: '#434752',
    normal: '#8f9094',
  },
  red: '#d42422',
  white: '#fff',
};

const _focusAndActiveStyles = {
  borderBottom: `1px solid ${_colors.white}`,
  boxShadow: 'none',
};
const _checkboxOption = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  styles: CSSObjectWithLabel,
  { isFocused, isSelected }: OptionProps<OptionType, IsMultiType, GroupType>
) => ({
  ...styles,
  ':active': {
    background: 'transparent',
  },
  alignItems: 'center',
  background:
    isFocused && !isSelected ? _colors.green.dark : (isSelected ? 'transparent' : undefined),
  cursor: 'pointer',
  display: 'flex',

  gap: '10px',
});

const _regularOption = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  styles: CSSObjectWithLabel,
  { isFocused, isSelected }: OptionProps<OptionType, IsMultiType, GroupType>
) => ({
  ...styles,
  ':active': {
    background: _colors.green.dark,
  },
  background:
    isFocused && !isSelected ? _colors.green.dark : (isSelected ? _colors.green.active : undefined),

  cursor: 'pointer',
});

export const selectStyles = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  isCheckbox = false
): StylesConfig<OptionType, IsMultiType, GroupType> => ({
  control: styles => ({
    ...styles,
    ':active': { ..._focusAndActiveStyles },
    ':focus': { ..._focusAndActiveStyles },
    ':focus-within': { ..._focusAndActiveStyles },
    background: 'inherit',
    border: 'none',
    borderBottom: `1px solid ${_colors.grey.normal}`,
    borderRadius: 0,
    // This line disable the blue border
    boxShadow: 'none',
    caretColor: _colors.green.bright,
    cursor: 'text',
    fontSize: '100%',
    outline: 'none',
    overflow: 'hidden',
    padding: '8px 4px',
    width: '100%',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    cursor: 'pointer',
    padding: 0,
  }),
  input: styles => ({
    ...styles,
    color: _colors.white,
    margin: 0,
    padding: 0,
  }),
  menu: () => ({
    background: 'transparent',
    margin: 0,
    maxHeight: '300px',
    padding: 0,
    paddingTop: '8px',
  }),
  menuList: styles => ({
    ...styles,
    background: _colors.grey.dark,
    borderRadius: '5px',
    boxShadow: '0 4px 24px 0 rgb(17 20 27 / 25%)',
    margin: 0,
    overflowY: 'auto',
    padding: 0,
  }),
  multiValue: styles => ({
    ...styles,
    ':hover': {
      background: _colors.grey.medium,
    },
    background: _colors.grey.dark,
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    padding: '4px 8px',
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: _colors.white,
    fontSize: '100%',
  }),
  multiValueRemove: styles => ({
    ...styles,
    ':hover': {
      svg: {
        fill: _colors.red,
      },
    },
    background: 'none',
  }),
  option: (styles, properties) =>
    isCheckbox ? _checkboxOption(styles, properties) : _regularOption(styles, properties),
  singleValue: styles => ({
    ...styles,
    color: _colors.white,
    margin: 0,
    padding: 0,
  }),
  valueContainer: styles => ({
    ...styles,
    margin: 0,
    padding: 0,
  }),
});
