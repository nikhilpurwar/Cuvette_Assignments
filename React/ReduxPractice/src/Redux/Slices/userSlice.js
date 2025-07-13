import { createSlice } from "@reduxjs/toolkit";

const initialState = {user:'Nikhil', isActive:false};

const userSlice = createSlice({
    name: 'userData',
    initialState,

    reducers: {
        addUser:(state, action) =>{
            state.userData = action.payload;
        },

        // resetUser: (state, action)
    }
    
})

export default userSlice.reducer;
export const {addUser} = userSlice.actions;

