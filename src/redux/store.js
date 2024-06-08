import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contactsSlice";
// import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // filters: filtersReducer,
  },
});
