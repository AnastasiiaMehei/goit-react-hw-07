import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      });
  },
});
export const selectTasks = (state) => state.tasks.items;

export const selectLoading = (state) => state.tasks.loading;

export const selectError = (state) => state.tasks.error;

// export const selectVisibleTasks = createSelector(
//   [selectTasks, selectTextFilter],
//   (tasks, textFilter) => {
//     // console.log("selectVisibleTasks", tasks);
//     return tasks.filter((task) =>
//       task.text.toLowerCase().includes(textFilter.toLowerCase())
//     );
//   }
// );

// export const selectContacts = state => state.tasks.items;

// export const selectLoading = state => state.tasks.loading;

// export const selectError = state => state.tasks.error;

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export default slice.reducer;
