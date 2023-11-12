import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../slices/inputSlice/inputSlice";
import printSlice from "../slices/printSlice/printSlice";

const store = configureStore({
    reducer:{
        inputs: inputSlice,
        print: printSlice,
    },
});

export default store;
