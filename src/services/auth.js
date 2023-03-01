// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '../data/users.js' }),
  endpoints: (builder) => ({
    login: builder.query({
        query: (email, password) => ({ url: '../data/users.js',
        method: 'POST',
        body: { email, password },
        config: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    }),
    }),
    }),
})


// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useLoginQuery } = userApi