import { createSlice } from '@reduxjs/toolkit'

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
    name: 'technologies',
    text: 'Technologies',
    type: 'checks',
    value: [],
  },
  {
    name: 'people',
    text: 'People',
    type: 'range',
    min: 1,
    max: 8,
    value: {
      min: null,
      max: null,
    },
  },
]

const usersFiltersSlice = createSlice({
  name: 'usersFilters',
  initialState,
  reducers: {
    setUsersFilter(state, action) {
      const { index, value } = action.payload

      state[index].value = value
    },
  },
})

const { reducer, actions } = usersFiltersSlice

export default reducer

export const { setUsersFilter } = actions
