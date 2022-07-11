import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://google-search3.p.rapidapi.com/api/v1/',
  }),
  endpoints: () => ({}),
});
