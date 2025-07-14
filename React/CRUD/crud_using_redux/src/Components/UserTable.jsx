import { useSelector, useDispatch } from "react-redux"
import {  deleteUser, setUser } from "../Redux/Slice/State/userSlice"

export const UserTable = () => {
    const { users } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const handleEdit = (item) => {
        dispatch(setUser(item));
    }
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <>
            <h1>Table</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone No.</td>
                        <td>Ations</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((items, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.phone}</td>
                            <td style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                <button style={{ width: "70px", backgroundColor: "yellow", color: "black" }} onClick={() => handleEdit(items)}>Edit</button>
                                <button style={{ width: "100px", backgroundColor: "Red" }} onClick={() => handleDelete(items.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
