import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
  filters: {
    countries: [],
    roles: [],
    languages: [],
    frameworks: []
  }
}

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setFilters: (state, action) => {
      state.filters = action.payload
    },
  },
})

export const { setIsModalOpen, setFilters } = sharedSlice.actions

export default sharedSlice.reducer
