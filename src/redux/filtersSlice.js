// // import { createSlice } from "@reduxjs/toolkit";
// // const initialState = {
// //   name: "",
// // };
// // const filterSlice = createSlice({
// //   name: "filters",
// //   initialState,
// //   // reducers: {
// //   //   filterContact: (state, action) => {
// //   //     state.name = action.payload;
// //   //   },
// //   // },
// // });

// // export const { filterContact } = filterSlice.actions;
// // // export default filterSlice.reducer;
// // export const getStatusFilter = (state) => state.filters.name;
// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     changeTextFilter: {
//       reducer(state, action) {
//         state.text = action.payload;
//       },
//     },
//   },
// });

// export const selectContactsFilters = (state) => state.filters.contacts;

// export const { changeContactsFilter } = filtersSlice.actions;

// export default filtersSlice.reducer;
