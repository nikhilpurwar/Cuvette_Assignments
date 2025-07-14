import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    id: null,
  },
  users: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = { ...state.user, ...action.payload }
    },

    setUsers(state, action) {
      state.users = [...state.users, action.payload];
    },

    editUser(state, action) {
      state.users = action.payload;
    },

    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
})

export const { setUser, setUsers, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer