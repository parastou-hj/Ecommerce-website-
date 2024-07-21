import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import all_product from '../components/assets/all_product';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch products. Please try again later.");
    }
  }
);
const allProducts=all_product
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [...allProducts],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
      state.status='loading'
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.status='succeeded';
      state.items=state.items.concat(action.payload)
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.status='failed';
      state.error=action.payload
    })
  }
});

export const selectAllProducts = (state) => state.products.items;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

export default productSlice.reducer;