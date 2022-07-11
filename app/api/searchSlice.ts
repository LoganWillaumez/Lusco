import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  page: number;
  type: string;
  isClick: boolean;
}

const initialState: CounterState = {
  page: 0,
  type: 'search',
  isClick: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleClick: (state) => {
      if (state.isClick !== null) state.isClick = !state.isClick;
      if (state.isClick === null) state.isClick = true;
    },
    handleChange: (
      state,
      action: PayloadAction<{ name: string; value: number | string | boolean }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    changePage: (state, action: PayloadAction<{ change: string }>) => {
      const { change } = action.payload;
      state.page = change === 'increment' ? state.page + 1 : state.page - 1;
    },
    resetPage: (state) => {
      state.page = 0;
    },
  },
});

export const { toggleClick, handleChange, changePage, resetPage } =
  searchSlice.actions;
export default searchSlice.reducer;
