'use client';
import AsyncSelect from 'react-select/async';
import { selectAutocompleteStyles } from '../../lib/select-autocomplete-styles';
import { ClearIndicator } from './clear-indicator';
import { Control } from './control';
import { Option } from './option';
import { SingleValue } from './single-value';
import debounce from 'lodash.debounce';
import { Props } from 'react-select';

/**
 * SelectAutocomplete Component
 *
 * A performant and user-friendly asynchronous select component powered by `ReactSelect`. This component fetches and displays user suggestions based on the input, utilizing the GitHub user API for example data.
 *
 * Props:
 *
 * @prop {Props<OptionType>} props - Props passed down from ReactSelect.
 *
 * Type `OptionType` is defined as follows:
 * export type OptionType = {
 *   label: string;
 *   value: string;
 *   image: string;
 * };
 *
 * Included Components:
 * - `ClearIndicator`: Custom component to override the default clear indicator in ReactSelect.
 * - `Control`: Custom control component to override the default control in ReactSelect.
 * - `Option`: Custom component to alter the display of options in the dropdown.
 * - `SingleValue`: Custom component to alter the way the single selected value is displayed.
 *
 * Utility:
 * - `selectAutocompleteStyles`: A function that returns the styles object, this is supplied to the `styles` prop of `ReactSelect` to override default styles.
 * - `debounce`: Used from `lodash.debounce` to prevent rapid, successive calls to `loadOptions` function which fetches data.
 *
 * Usage:
 *
 * ```tsx
 * import { SelectAutocomplete } from 'path-to-component';
 *
 * <SelectAutocomplete {...reactSelectProps} />
 * ```
 *
 * Note:
 * - `loadOptions` is debounced to optimize performance and minimize API calls during user input.
 * - It uses the GitHub API for fetching user data based on input, remember to change API endpoint according to use case.
 * - Custom components are used for several parts of the select (like Control, Option, etc.) to customize its appearance and behavior.
 * - Use the `transformToOptionType` function to map your API response to the `OptionType` if you switch to a different API.
 *
 * Styling:
 * This component utilizes `selectAutocompleteStyles` for styling, ensure it is tailored according to the UX/UI guidelines.
 *
 * Accessibility:
 * - Ensure that any images (avatars) fetched from the API have alternative text for screen readers by adding an appropriate description in the `Option` component.
 * - Ensure that the color contrast between the text and background meets WCAG standards.
 *
 * Future Improvements:
 * - Replace the any type for user in `transformToOptionType` with an accurate type when the API schema is ready.
 * - Integrate error handling and loading states into the UI for a more responsive user experience.
 *
 * This component fetches and renders selectable user data asynchronously, providing a customizable, user-friendly experience with minimal performance impact.
 */

export type OptionType = {
  label: string;
  value: string;
  image: string;
};

// TODO: remove later when server is ready
interface TempUser {
  login: string;
  id: number;
  avatar_url: string;
}

export const SelectAutocomplete = (props: Props<OptionType>) => {
  // TODO: change for user type when server is ready
  const transformToOptionType = (user: TempUser): OptionType => {
    return {
      label: user.login,
      value: user.id.toString(),
      image: user.avatar_url,
    };
  };

  const loadOptions = debounce((inputValue: string, callback: (options: OptionType[]) => void) => {
    // TODO: change for server link
    fetch(`https://api.github.com/search/users?q=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        const options = data.items.map(transformToOptionType);
        callback(options);
      })
      .catch(error => {
        console.error(error);
        callback([]);
      });
  }, 500);

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      styles={selectAutocompleteStyles()}
      isClearable={true}
      components={{
        Control,
        ClearIndicator,
        Option,
        SingleValue,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      {...props}
    />
  );
};
