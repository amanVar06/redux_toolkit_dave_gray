import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, //dynamic as it is in square bracket
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  //it is required to use this when we are using api Slice with RTK Query
});

//now it will be available to the entire app after adding it to the store
//through the provider that is inside main.jsx
