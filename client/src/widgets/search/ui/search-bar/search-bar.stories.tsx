import type { Meta } from '@storybook/react';
import { SearchBar } from './search-bar';

const meta: Meta<typeof SearchBar> = {
  title: 'widgets/search/search-bar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const SearchBar_default = () => {
  return (
    <SearchBar
      initialFiltersState={[
        {
          type: 'text',
          label: 'Name',
          value: 'name',
          placeholder: 'Search by name',
          filterValue: '',
        },
        {
          label: 'Countries',
          value: 'countries',
          type: 'checkbox',
          placeholder: 'Search by countries',
          optionsArr: [
            { label: 'Japan', value: 'jp' },
            { label: 'Russia', value: 'ru' },
            { label: 'Ukraine', value: 'ua' },
            { label: 'Korea', value: 'kr' },
          ],
          filterValue: [],
        },
      ]}
      callback={queryString => console.log(queryString)}
    />
  );
};
