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
          oneItemName: 'country',
          filterValue: [],
        },
        {
          label: 'Specialities',
          value: 'specialities',
          type: 'multiple',
          placeholder: 'Search by speciality',
          optionsArr: [
            {
              label: 'Mobile Developer',
              value: 'mobile',
            },
            {
              label: 'Frontend/UI Developer',
              value: 'frontend',
            },
            {
              label: 'Backend Developer',
              value: 'backend',
            },
            {
              label: 'Full-Stack Developer',
              value: 'fullstack',
            },
          ],
          oneItemName: 'speciality',
          filterValue: [],
        },
      ]}
      onChange={filterValues => console.log(filterValues)}
    />
  );
};
