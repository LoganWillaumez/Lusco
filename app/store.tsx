import { configureStore } from '@reduxjs/toolkit';
import { emptySplitApi } from './api/emptySplitApi';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import searchReducer from './api/searchSlice';

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
