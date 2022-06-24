import { configureStore } from '@reduxjs/toolkit';
import { emptySplitApi } from './api/emptySplitApi';
import searchReducer from './api/SearchSlice';

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});
