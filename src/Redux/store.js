import { configureStore } from "@reduxjs/toolkit";
import searchFilter from "./states/search_filter";

let store = configureStore({
  reducer: { searchFilter },
});

export default store;
