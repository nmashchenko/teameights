import { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';

const _colors = {
  grey: {
    normal: '#8f9094',
    dark: '#2f3239',
    medium: '#434752'
  },
  green: {
    bright: '#5bd424',
    dark: '#064006',
    active: '#1c8111'
  },
  white: '#fff',
  red: '#d42422'
};

const _focusAndActiveStyles = {
  boxShadow: 'none',
  borderBottom: `1px solid ${_colors.white}`
};
const _checkboxOption = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>(
  styles: CSSObjectWithLabel,
  { isFocused, isSelected }: OptionProps<OptionType, IsMultiType, GroupType>
) => ({
  ...styles,
  background:
    isFocused && !isSelected ? _colors.green.dark : isSelected ? 'transparent' : undefined,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '10px',

  ':active': {
    background: 'transparent'
  }
});

const _regularOption = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>(
  styles: CSSObjectWithLabel,
  { isFocused, isSelected }: OptionProps<OptionType, IsMultiType, GroupType>
) => ({
  ...styles,
  cursor: 'pointer',
  background:
    isFocused && !isSelected ? _colors.green.dark : isSelected ? _colors.green.active : undefined,

  ':active': {
    background: _colors.green.dark
  }
});

export const selectStyles = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>(
  isCheckbox = false
): StylesConfig<OptionType, IsMultiType, GroupType> => {
  return {
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
      fontSize: '100%',
      borderBottom: `1px solid ${_colors.grey.normal}`,
      // This line disable the blue border
      boxShadow: 'none',
      ':active': { ..._focusAndActiveStyles },
      ':focus': { ..._focusAndActiveStyles },
      ':focus-within': { ..._focusAndActiveStyles },
      caretColor: _colors.green.bright
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: 0,
      cursor: 'pointer'
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0
    }),
    singleValue: (styles) => ({
      ...styles,
      color: _colors.white,
      padding: 0,
      margin: 0
    }),
    input: (styles) => ({
      ...styles,
      color: _colors.white,
      padding: 0,
      margin: 0
    }),
    menu: () => ({
      padding: 0,
      margin: 0,
      background: 'transparent',
      paddingTop: '8px',
      maxHeight: '300px'
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      borderRadius: '5px',
      overflowY: 'auto',
      boxShadow: '0 4px 24px 0 rgb(17 20 27 / 25%)',
      background: _colors.grey.dark
    }),
    option: (styles, props) =>
      isCheckbox ? _checkboxOption(styles, props) : _regularOption(styles, props),
    multiValue: (styles) => ({
      ...styles,
      cursor: 'pointer',
      borderRadius: '5px',
      padding: '4px 8px',
      display: 'flex',
      background: _colors.grey.dark,
      ':hover': {
        background: _colors.grey.medium
      }
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: _colors.white,
      fontSize: '100%'
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      background: 'none',
      ':hover': {
        svg: {
          fill: _colors.red
        }
      }
    })
  };
};
