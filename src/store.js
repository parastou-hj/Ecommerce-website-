import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import paginationReducer from './features/paginationSlice'
import seachReducer from './features/searchSlice'
import productReducer from './features/productSlice'
import userReducer from './features/userSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        pagination:paginationReducer,
        search:seachReducer,
        products:productReducer,
        user:userReducer
    }
})
export default store;