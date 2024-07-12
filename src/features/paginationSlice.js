import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems:0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setCurrentPage,setTotalItems } = paginationSlice.actions;

export const selectItemsPerPage = (state) => state.pagination.itemsPerPage;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectTotalItems = (state) => state.pagination.totalItems;
export const selectTotalPages = (state) => 
  Math.ceil(state.pagination.totalItems / state.pagination.itemsPerPage);
export const selectIndexOfLastProduct = (state) => 
  state.pagination.currentPage * state.pagination.itemsPerPage;
export const selectIndexOfFirstProduct = (state) => 
  (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;

export default paginationSlice.reducer;