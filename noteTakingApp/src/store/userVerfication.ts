import { createSlice } from '@reduxjs/toolkit'

export const userVerification = createSlice({
  name: 'counter',
  initialState:{
    otp:'',
    email:'',
    name:'',
    profileEmail:'',
    userId:''
  },
  reducers: {
   setOtp:(state,action)=>{
state.otp=action.payload
   },
   setEmail:(state,action)=>{
state.email=action.payload
   },
   setName:(state,action)=>{
    state.name=action.payload
   },
   setProfileEmail:(state,action)=>{
    state.profileEmail=action.payload
   },
   setUserId:(state,action)=>{
state.userId=action.payload
   }
  },
})

export const { setOtp,setEmail,setName,setProfileEmail,setUserId } = userVerification.actions

export default userVerification.reducer