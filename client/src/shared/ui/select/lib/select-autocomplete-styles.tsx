import { CSSObjectWithLabel, OptionProps, StylesConfig } from 'react-select';
import { OptionType } from '@/shared/ui/select/ui/select-autocomplete/select-autocomplete';

const _colors = {
  grey: {
    normal: '#8f9094',
    dark: '#2f3239',
    medium: '#434752',
  },
  green: {
    bright: '#5bd424',
    dark: '#064006',
    active: '#1c8111',
  },
  white: '#fff',
  red: '#d42422',
};

const _regularOption = (
  styles: CSSObjectWithLabel,
  { isFocused, isSelected }: OptionProps<OptionType>
) => ({
  ...styles,
  cursor: 'pointer',
  padding: '4px 8px 4px 16px',
  background:
    isFocused && !isSelected ? _colors.green.dark : isSelected ? _colors.green.active : undefined,

  ':active': {
    background: _colors.green.dark,
  },
});

export const selectAutocompleteStyles = (): StylesConfig<OptionType> => {
  return {
    control: styles => ({
      ...styles,
      outline: 'none',
      border: `1px solid ${_colors.grey.normal}`,
      borderRadius: 10,
      width: '100%',
      overflow: 'hidden',
      background: 'inherit',
      cursor: 'text',
      padding: '9px 12px',
      fontSize: '100%',
      // This line disable the blue border
      boxShadow: 'none',
      '&:active': { boxShadow: 'none' },
      '&:focus': { boxShadow: 'none' },
      '&:focus-within': { boxShadow: 'none' },
      '&:hover': { boxShadow: 'none' },
      caretColor: _colors.green.bright,
    }),
    placeholder: styles => ({ ...styles, margin: 0, color: _colors.grey.normal }),
    valueContainer: styles => ({
      ...styles,
      padding: 0,
      margin: 0,
    }),
    singleValue: styles => ({
      ...styles,
      color: _colors.white,
      padding: 0,
      margin: 0,
    }),
    clearIndicator: styles => ({
      ...styles,
      padding: 0,
      cursor: 'pointer',
    }),
    input: styles => ({
      ...styles,
      color: _colors.white,
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
    menuList: styles => ({
      ...styles,
      padding: '8px 0px',
      margin: 0,
      borderRadius: '5px',
      overflowY: 'auto',
      boxShadow: '0 4px 24px 0 rgb(17 20 27 / 25%)',
      background: _colors.grey.dark,
    }),
    option: (styles, props) => _regularOption(styles, props),
  };
};
