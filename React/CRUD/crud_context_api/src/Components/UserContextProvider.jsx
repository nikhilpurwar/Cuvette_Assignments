import { createContext, useState } from "react";

export const UserContext = createContext();

const userContextProvider = ({ children }) => {

    const [user, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        id: null,
    });

    const [users, setUsersData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            const updatedData = users.map((item) =>
                item.id === user.id ? { ...user } : item
            )
            setUsersData(updatedData);
        }
        else {
            setUsersData([...users, { ...user, id: crypto.randomUUID() }]);
        }
        setUserData({
            name: "",
            email: "",
            phone: "",
            id: null,
        });
    };
    const handleDelete = (id) => {
        const filteredUsers = users.filter((item) => item.id !== id);
        setUsersData(filteredUsers);
    };

    const handleEdit = (item) => {
        setUserData(item);
    }

    return(
        <UserContext.Provider value ={{user,users, handleChange, handleDelete, handleEdit, handleSubmit}}>
            {children}
        </UserContext.Provider>
    )
};

export default userContextProvider;