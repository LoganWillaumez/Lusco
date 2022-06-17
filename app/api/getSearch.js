import { emptySplitApi } from '../api/emptySplitApi';
const searchApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoogleSearch: builder.mutation({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ type, searchTerm, isVideo }) => {
        return {
          url: `${type}/q=${searchTerm} ${type === 'video' && 'video'}`,
          method: 'GET',
          contentType: 'application/json',
          headers: {
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetGoogleSearchMutation } = searchApi;
