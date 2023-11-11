import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstname: "Wayne",
    middlename: "Wayne",
    lastname: "Wayne",
    username: "Wayne",
    level: "Guest"
  }
};

const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const nameActions = nameSlice.actions;
export default nameSlice.reducer;