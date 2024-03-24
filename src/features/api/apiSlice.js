import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Users"],
  endpoints: () => ({}),
});





// const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ["Users"],
//     endpoints: () => ({}),
//   });
