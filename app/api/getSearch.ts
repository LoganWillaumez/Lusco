import { useSelector } from 'react-redux';
import { emptySplitApi } from './emptySplitApi';

interface queryTypes {
  type: string;
  searchTerm: string;
}
const searchApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoogleSearch: builder.mutation({
      query: ({ type, searchTerm }: queryTypes) => {
        return {
          url: `${type}/q=${searchTerm}&num=100`,
          method: 'GET',
          contentType: 'application/json',
          headers: {
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY,
            'X-Proxy-Location': 'FR',
          },
        };
      },
    }),
  }),
});

export const { useGetGoogleSearchMutation } = searchApi;
