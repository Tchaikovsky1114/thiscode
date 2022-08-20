import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  userData: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    
  }
})

export const authReducer = authSlice.reducer;
