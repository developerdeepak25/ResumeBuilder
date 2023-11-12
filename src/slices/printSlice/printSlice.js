// printSlice.js
import { createSlice } from "@reduxjs/toolkit";

const printSlice = createSlice({
  name: "print",
  initialState: {
    shouldPrint: false,
  },
  reducers: {
    setPrint: (state, action) => {
      state.shouldPrint = action.payload;
    },
  },
});

export const { setPrint } = printSlice.actions;
export default printSlice.reducer;
