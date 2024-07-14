import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import paginationReducer from './features/paginationSlice'
import seachReducer from './features/searchSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        pagination:paginationReducer,
        search:seachReducer
    }
})
export default store;