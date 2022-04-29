import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

// Actions
export const { setResults } = searchSlice.actions;

// Reducer
export default searchSlice.reducer;
