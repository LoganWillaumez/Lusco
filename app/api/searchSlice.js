import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  type: 'search',
  isClick: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleClick: (state, action) => {
      if (state.isClick !== null) state.isClick = !state.isClick;
      if (state.isClick === null) state.isClick = true;
    },
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    changePage: (state, action) => {
      const { change } = action.payload;
      state.page = change === 'increment' ? state.page + 1 : state.page - 1;
    },
  },
});

export const { toggleClick, handleChange, changePage } = searchSlice.actions;
export default searchSlice.reducer;
