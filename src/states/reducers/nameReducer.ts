import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of this slice of state so TypeScript can help us catch bugs
interface NameState {
  name: string;
  user: {
    firstname: string;
    middlename: string;
    lastname: string;
    username: string;
    level: string;
  };
}

const initialState: NameState = {
  name: "Wayne",
  user: {
    firstname: "Wayne",
    middlename: "Wayne",
    lastname: "Wayne",
    username: "Wayne",
    level: "Guest",
  },
};

const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      // Update the name value in the store
      state.name = action.payload;
    },
  },
});

export const nameActions = nameSlice.actions;
export default nameSlice.reducer;
