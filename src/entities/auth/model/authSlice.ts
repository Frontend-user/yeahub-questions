import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isUserAuthenticated: false,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isUserAuthenticated = action.payload;
    },
  },
});
export { authSlice };
export const { setIsAuth } = authSlice.actions;
