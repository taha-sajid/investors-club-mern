import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Features/Auth/authSlice";
import ListingReducer from "./Features/Auth/listingSlice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    listing: ListingReducer,
  },
});
