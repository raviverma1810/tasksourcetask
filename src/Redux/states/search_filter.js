import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shapes: [],
  carat: [0.2, 30],
  price: [47, 34566],
  clarity: [],
  colour: [],
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setFilter: (state, data) => {
      state.carat = data.payload.carat;
      state.shapes = data.payload.shapes;
      state.price = data.payload.price;
      state.clarity = data.payload.clarity;
      state.colour = data.payload.colour;
    },
    clearFilter: (state) => {
      state.carat = [0.2, 30];
      state.shapes = [];
      state.price = [47, 34566];
      state.clarity = [];
      state.colour = [];
    },
  },
});

export const { setFilter, clearFilter } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
