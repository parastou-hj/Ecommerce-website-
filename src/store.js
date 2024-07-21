import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import paginationReducer from './features/paginationSlice'
import seachReducer from './features/searchSlice'
import productReducer from './features/productSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        pagination:paginationReducer,
        search:seachReducer,
        products:productReducer
    }
})
export default store;