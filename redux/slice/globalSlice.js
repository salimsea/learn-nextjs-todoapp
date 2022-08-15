import { createSlice } from "@reduxjs/toolkit";

// initial state
export const initialState = {
  dataUsers: {
    items: [],
    error: false,
    msg: "null",
  },
};

// our slice
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDataUsers: (state, { payload }) => {
      state.dataUsers.error = payload.msg ?? false;
      state.dataUsers.items = payload.items;
      state.dataUsers.msg = payload.msg;
    },
  },
});

export const { setDataUsers } = globalSlice.actions;
export default globalSlice.reducer;
