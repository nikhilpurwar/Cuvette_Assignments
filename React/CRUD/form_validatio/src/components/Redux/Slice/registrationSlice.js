import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  users: [],
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    addUser(state, action) {
      state.users.push({ ...action.payload });
    },
    resetUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { setUser, addUser, resetUser } = registrationSlice.actions;
export default registrationSlice.reducer;