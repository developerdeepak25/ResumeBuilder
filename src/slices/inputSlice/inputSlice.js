import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    jobTitle: "",
    fname: "",
    lname: "",
    address: "",
    phone: "",
    email: "",
    // jobTitle: "social media manager",
    // fname: "ESTELLE",
    // lname: "DARCY",
    // address: "17, radhika, indore, india",
    // phone: "897548545",
    // email: "developer@example.com",
  },
  professionalSummary: {
    summary: "",
  },
  education: [
    // {
    // school: "my school 1",
    // location: "indore MP",
    // degree: "BCA",
    // startDate: "2001-01",
    // endDate: "2001-01",
    // ongoing: false,
    // },
  ],
  skills: [
    // {
    // skill: "Photo editing and digital illustration software",
    // },
  ],
  experience: [
    // {
    //   jobTitle: "developer",
    //   company: "microhard",
    //   location: "microhard city",
    //   startDate: "2001-01",
    //   endDate: "2001-01",
    //   description: "this is the description",
    //   ongoing: false,
    // },
  ],
};

const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    updateNonIncrementalInfo(state, action) {
      const { obj, val, name } = action.payload;
      state[obj][name] = val;
    },

    updateIncrementalInfo(state, action) {
      const { obj, i, val, name } = action.payload;
      state[obj][i][name] = val;
    },
    updateStateArray(state, action) {
      const { obj, val } = action.payload;

      state[obj] = [...val];
    },
  },
});

export default inputSlice.reducer;
export const {
  updateIncrementalInfo,
  updateStateArray,
  updateNonIncrementalInfo,
} = inputSlice.actions;
