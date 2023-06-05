import { configureStore } from '@reduxjs/toolkit'
import userVerfication from './userVerfication'
export const store = configureStore({
  reducer: {
    userVerfication
  },
})