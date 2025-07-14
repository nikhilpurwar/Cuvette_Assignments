import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './Slice/registrationSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});