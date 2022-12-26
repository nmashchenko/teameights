import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
  },
})

export const { setIsModalOpen } = sharedSlice.actions

export default sharedSlice.reducer
