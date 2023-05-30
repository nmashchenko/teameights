import { createSlice } from '@reduxjs/toolkit'

/*

interface ITextFilter {
  name: string;
  text: string;
  type: 'text';
  value: string;
}

interface IChecksItem {
  label: string;
  value: string;
}

interface IChecksFilter {
  name: string;
  text: string;
  type: 'checks';
  value: IChecksItem[];
}

interface IRangeFilter {
  name: string;
  text: string;
  type: 'range';
  min: number;
  max: number;
  value: null | [number, number];
}

initialState: (ITextFilter | IChecksFilter | IRangeFilter)[]

*/

const initialState = [
  {
    name: 'name',
    text: 'Name',
    type: 'text',
    value: '',
  },
  {
    name: 'tag',
    text: 'Tag',
    type: 'text',
    value: '',
  },
  {
    name: 'countries',
    text: 'Countries',
    type: 'checks',
    value: [],
  },
  {
    name: 'people',
    text: 'People',
    type: 'range',
    min: 1,
    max: 8,
    value: null,
  },
]

const teamsFiltersSlice = createSlice({
  name: 'teamsFilters',
  initialState,
  reducers: {
    setTeamsFilter(state, action) {
      const { index, value } = action.payload

      state[index].value = value
    },
  },
})

const { reducer, actions } = teamsFiltersSlice

export default reducer

export const { setTeamsFilter } = actions
