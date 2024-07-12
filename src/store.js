import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import paginationReducer from './features/paginationSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        pagination:paginationReducer
    }
})
export default store;