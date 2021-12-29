import { createSlice } from "@reduxjs/toolkit";

export const nightModeSlice = createSlice({
  name: "nighMode",
  initialState: {
    value: false,
  },
  reducers: {
    changeNightMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeNightMode } = nightModeSlice.actions;

export default nightModeSlice.reducer;
