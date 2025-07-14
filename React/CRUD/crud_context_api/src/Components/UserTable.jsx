import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContextProvider'

export const UserTable = () => {
    const {users, handleDelete, handleEdit} = useContext(UserContext);

    return (
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
        </table>)
}
