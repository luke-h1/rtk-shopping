import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/api/products`,
    }),
  }),
});
export const { useGetProductsQuery } = productApi;
