import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        query:''
    },
    reducers:{
        setSearchQuery(state,action){
            state.query=action.payload
        }
    }
})

export const {setSearchQuery}=searchSlice.actions;
export const selectSearch=state=>state.search.query;
export default searchSlice.reducer