import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


let users = [];


export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(users.find(user=>user.email===userData.email)){
        reject(rejectWithValue('Email already exists'))
      }else{
        const newUser={...userData,id:Date.now()};
       ;
        resolve( users.push(newUser))
      }
    }, 1000);
  })
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const user=users.find(user=>user.email===credentials.email&&user.password===credentials.password)
      if(user){
        resolve({password:user.password,email:user.email,username:user.username})
      }else{
        reject(rejectWithValue('username or password is incorrect!'))
      }
    }, 1000);

   })
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {username: '',
        email: '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = {username: '',
        email: '',
    };
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;


export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;