import { Login } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialstateValue={
    username:'',
    isLoggedIn:false
}
const userSlice=createSlice({
    name:'user',
    initialState:initialstateValue,
    reducers:{
        updateUser(state,action){
            state.username=action.payload
        },
        LogIn(state,action){
            state.isLoggedIn=true
        },
        LogOut(state,action){
            state.isLoggedIn=false

        }
    }

})

export const userAction=userSlice.actions;
export const selectUserName=state=>state.user.username
export const selectUserLogin=state=>state.user.isLoggedIn
export default userSlice.reducer;