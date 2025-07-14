
import {  useState } from 'react'
import './App.css'

function App() {
  const [user, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
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
    });
  };

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((item) => item.id !== id);
    setUsersData(filteredUsers);
  };

  const handleEdit = (item) => {
    setUserData(item);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} />
        <input type="text" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
        <input type="text" placeholder='Phone Number' name='phone' value={user.phone} onChange={handleChange} />
        <button>{user.id ? "Save" : "Submit"}</button>
      </form>

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
    </div>
  )
}

export default App
