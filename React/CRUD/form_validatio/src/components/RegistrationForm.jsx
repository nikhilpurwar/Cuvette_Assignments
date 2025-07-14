import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, addUser, resetUser } from "./Redux/Slice/registrationSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import './style.css';

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.registration);

  const formik = useFormik({
    initialValues: user,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      dispatch(addUser({ ...values, id: crypto.randomUUID() }));
      dispatch(resetUser());
      alert("Registration successful!");
    },
  });

  const handleChange = (e) => {
    dispatch(setUser({ [e.target.name]: e.target.value }));
    formik.handleChange(e);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formik.values.name} onChange={handleChange} />
      {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}

      <input type="email" name="email" placeholder="Email" value={formik.values.email} onChange={handleChange} />
      {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

      <input type="password" name="password" placeholder="Password" value={formik.values.password} onChange={handleChange} />
      {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}

      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={handleChange} />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="error">{formik.errors.confirmPassword}</p>}

      <button type="submit">Register</button>
    </form>
  );
};