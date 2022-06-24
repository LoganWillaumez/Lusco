import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  type: 'search',
  isClick: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleClick: (state, action) => {
      state.isClick = !state.isClick;
    },
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { toggleClick, handleChange } = searchSlice.actions;
export default searchSlice.reducer;
