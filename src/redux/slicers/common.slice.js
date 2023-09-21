import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    setTheme: (state, action) => {
      console.log("🚀 ~ file: common.slice.js:12 ~ action:", action);
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = commonSlice.actions;

export default commonSlice.reducer;
