import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from '../Slice/State/userSlice';


export const store = configureStore({
  reducer: {
    user: useReducer,
  }
});
