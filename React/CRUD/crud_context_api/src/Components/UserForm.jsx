import React from 'react'
import './style.css' 
import { useContext } from 'react'
import { UserContext } from './UserContextProvider'
export const UserForm = () => {
    const {user, handleSubmit, handleChange} = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} />
            <input type="text" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
            <input type="text" placeholder='Phone Number' name='phone' value={user.phone} onChange={handleChange} />
            <button>{user.id ? "Save" : "Submit"}</button>
        </form>
    )
}
