import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './authSlice'

const store = configureStore({ reducer: {authReducer:AuthSlice.reducer} })
export default store