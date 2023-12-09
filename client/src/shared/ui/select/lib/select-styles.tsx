import { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';

const _colors = {
  grey: {
    normal: 'var(--grey-normal-color)',
    dark: 'var(--grey-dark-color)',
    medium: 'var(--grey-medium-color)',
  },
  green: {
    bright: 'var(--green-bright-color)',
    dark: 'var(--green-dark-color)',
    active: 'var(--green-active-color)',
  },
  white: 'var(--white-color)',
  red: 'var(--red-error-color)',
};

const getFocusAndActiveStyles = (isWithBorder?: boolean) => ({
  boxShadow: 'none',
  borderBottom: isWithBorder ? `1px solid ${_colors.white}` : 'none',
});
const _checkboxOption = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
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
    background: 'transparent',
  },
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
  cursor: 'pointer',
  background:
    isFocused && !isSelected ? _colors.green.dark : isSelected ? _colors.green.active : undefined,

  ':active': {
    background: _colors.green.dark,
  },
});

export const selectStyles = <
  OptionType,
  IsMultiType extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(
  styles?: StylesConfig<OptionType, IsMultiType, GroupType>,
  isCheckbox = false,
  isWithBorder = true
): StylesConfig<OptionType, IsMultiType, GroupType> => {
  const customStyles = styles || {};

  return {
    ...customStyles,
    control: (base, props) => ({
      ...base,
      outline: 'none',
      border: 'none',
      borderRadius: 0,
      width: '100%',
      overflow: 'hidden',
      background: 'inherit',
      cursor: 'text',
      padding: '8px 4px',
      fontSize: '100%',
      borderBottom: isWithBorder ? `1px solid ${_colors.grey.normal}` : 'none',
      // This line disable the blue border
      boxShadow: 'none',
      ':active': { ...getFocusAndActiveStyles(isWithBorder) },
      ':focus': { ...getFocusAndActiveStyles(isWithBorder) },
      ':focus-within': { ...getFocusAndActiveStyles(isWithBorder) },
      caretColor: _colors.green.bright,
      // Spreading custom styles
      ...(customStyles.control ? customStyles.control({}, props) : {}),
    }),
    dropdownIndicator: (base, props) => ({
      ...base,
      padding: 0,
      cursor: 'pointer',
      ...(customStyles.dropdownIndicator ? customStyles.dropdownIndicator({}, props) : {}),
    }),
    valueContainer: (base, props) => ({
      ...base,
      padding: 0,
      margin: 0,
      ...(customStyles.valueContainer ? customStyles.valueContainer({}, props) : {}),
    }),
    singleValue: (base, props) => ({
      ...base,
      color: _colors.white,
      padding: 0,
      margin: 0,
      ...(customStyles.singleValue ? customStyles.singleValue({}, props) : {}),
    }),
    input: (base, props) => ({
      ...base,
      color: _colors.white,
      padding: 0,
      margin: 0,
      ...(customStyles.input ? customStyles.input({}, props) : {}),
    }),
    menu: (base, props) => ({
      ...base,
      padding: 0,
      margin: 0,
      background: 'transparent',
      paddingTop: '8px',
      maxHeight: '300px',
      ...(customStyles.menu ? customStyles.menu({}, props) : {}),
    }),
    menuList: (base, props) => ({
      ...base,
      padding: 0,
      margin: 0,
      borderRadius: '5px',
      overflowY: 'auto',
      boxShadow: '0 4px 24px 0 rgb(17 20 27 / 25%)',
      background: _colors.grey.dark,
      ...(customStyles.menuList ? customStyles.menuList({}, props) : {}),
    }),
    option: (styles, props) =>
      customStyles.option
        ? customStyles.option({}, props)
        : isCheckbox
        ? _checkboxOption(styles, props)
        : _regularOption(styles, props),
    multiValue: (base, props) => ({
      ...base,
      cursor: 'pointer',
      borderRadius: '5px',
      padding: '4px 8px',
      display: 'flex',
      background: _colors.grey.dark,
      ':hover': {
        background: _colors.grey.medium,
      },
      ...(customStyles.multiValue ? customStyles.multiValue({}, props) : {}),
    }),
    multiValueLabel: (base, props) => ({
      ...base,
      color: _colors.white,
      fontSize: '100%',
      ...(customStyles.multiValueLabel ? customStyles.multiValueLabel({}, props) : {}),
    }),
    multiValueRemove: (base, props) => ({
      ...base,
      background: 'none',
      ':hover': {
        svg: {
          fill: _colors.red,
        },
      },
      ...(customStyles.multiValueRemove ? customStyles.multiValueRemove({}, props) : {}),
    }),
  };
};
