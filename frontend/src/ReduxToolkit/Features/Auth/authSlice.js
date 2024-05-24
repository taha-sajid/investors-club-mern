import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  currentUser: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
