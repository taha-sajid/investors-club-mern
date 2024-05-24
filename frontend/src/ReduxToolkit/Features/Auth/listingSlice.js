import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  data: {},
  error: null,
  singleProduct: {
    _id: "65cc5e8a8fdc26873ff9d022",
    businessName: "The Leather Jacketes",
    url: "theleatherjahcketes.com",
    askingPrice: "20,000",
    revenue1: "2130",
    revenue2: "321",
    revenue3: "432",
    domainRegistrationYear: "232",
    businessType: "E-commerce",
    monetizationMethods: [],
    image: "image-1708343196418-508608689.jpg",
    __v: 0,
  },
};
const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    fetchListDataStart: (state) => {
      state.isLoading = true;
    },
    fetchListDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchListDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateSingleProductData: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export const {
  fetchListDataStart,
  fetchListDataSuccess,
  fetchListDataFailure,
  updateFormData,
  updateSingleProductData,
} = listingSlice.actions;

export default listingSlice.reducer;
export const selectListing = (state) => state.listing;
