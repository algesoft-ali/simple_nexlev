import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarOpen: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.navbarOpen = !state.navbarOpen;
    },
  },
});

export const { toggleNavbar } = themeSlice.actions;
export default themeSlice.reducer;
