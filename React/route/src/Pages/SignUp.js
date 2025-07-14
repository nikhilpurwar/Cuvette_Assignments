import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import './SignUp.css';
export const SignUp = () => {

    const [userData, setUser] = useState({
        name: "",
        email: "",
        number: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...userData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        setUser({
            name: "",
            email: "",
            number: "",
        });
    }
    
    const handleReset = () => {
        setUser({
            name: "",
            email: "",
            number: "",
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={userData.name} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={userData.email} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="">Phone Nummber</label>
                <input type="number" name='number' value={userData.number} onChange={handleChange} />
            </div>

            <div className='button'>
                <button type='submit'>Submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>
            </div>
        </form>
    )
}
