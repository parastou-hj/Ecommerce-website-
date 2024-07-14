import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    ...newItem,quantity:1,totalPrice:newItem.price
                    // id:newItem.id,
                    // name:newItem.name,
                    // price:newItem.price,
                    // totalPrice:newItem.price,
                    // image:newItem.image,
                    // quantity:1
    
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice+=newItem.price
                
            }
           
        },
        removeFromCart(state,action){
            const removeItem=action.payload
            const existingItem=state.items.find(item=>item.id===removeItem.id);
            const removed=state.items.filter(item=>item.id!==removeItem.id);
            state.totalQuantity--

            if(existingItem.quantity===1){
                state.items=[...removed]
            }else{
                existingItem.quantity--;
                existingItem.totalPrice-=removeItem.price


            }
        }
    }
})

export const {addToCart,removeFromCart}=cartslice.actions;
export const selectCartItems=state=>state.cart.items;
export const selectCartItemsNumber=state=>state.cart.totalQuantity;

export default cartslice.reducer