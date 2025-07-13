import React, { useState } from 'react'
import { addUser } from '../Redux/Slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';


export const User = () => {
    const data = useSelector((state) => {
        return state.userData.user
    });
    const dispatch = useDispatch();

    console.log(data);

    const [userData, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...userData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        dispatch(addUser(userData));
    }

    return (
        <div>
            <br />
            <form onClick={handleSubmit}>
                <input type="text" placeholder='name' name='name' value={userData.name} onChange={handleChange} />
                <input type="text" placeholder='email' name='email' value={userData.email} onChange={handleChange} />
                <input type="text" placeholder='Password' name='password' value={userData.password} onChange={handleChange} />

                <button>Submit</button>
            </form>
            {/* <ul>
                {data.map((data, items) => (
                    <li >{items}</li>
                ))}
            </ul> */}
        </div>
    )
}
