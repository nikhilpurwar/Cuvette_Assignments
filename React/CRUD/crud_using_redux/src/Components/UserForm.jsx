import React from 'react'
import * as Yup from 'yup'
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import { setUser, setUsers, editUser } from '../Redux/Slice/State/userSlice'
import { useState } from 'react'


export const UserForm = () => {
    // const {user, handleSubmit, handleChange} = useContext(UserContext);
    const dispatch = useDispatch();
    const { user, users } = useSelector(state => state.user)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setUser({ [name]: value.trim() }));
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        phone: Yup.string().trim().required("Phone Number is required"),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            console.log("Validating user:", user);
            await validationSchema.validate(user, { abortEarly: false });
            const payload = { ...user, id: user.id || crypto.randomUUID() };
            if (user.id) {
                const updatedData = users.map(item => item.id === user.id ? payload : item);
                dispatch(editUser(updatedData));
            } else {
                dispatch(setUsers(payload));
            }
            dispatch(setUser({ name: "", email: "", phone: "", id: null }));
            setErrors({});
        } catch (error) {
            const validationError = {};
            error.inner?.forEach(err => {
                validationError[err.path] = err.message;
            });
            setErrors(validationError);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <input type="tel" placeholder='Phone Number' name='phone' value={user.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <button>{user.id ? "Save" : "Submit"}</button>
        </form>
    )
}
