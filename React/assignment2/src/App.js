// import './App.css';
// import React, { useState } from 'react';
// import TaskList from './Component/TaskList';
// function App() {
  
//   const [addTask, setAdd] = useState('');
  
//   const handleAdd = () => {
//     const input = document.querySelector('input').value;
//     setAdd (input);
//   };

//   return (
//     <>
//       <input type="text" placeholder="Enter Task" />
//       <button onClick={handleAdd}>ADD</button>
//       <TaskList addTask = {addTask}/>
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, editing: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={removeTodo}
        onEdit={editTodo}
        onToggle={toggleEdit}
      />
    </div>
  );
}

export default App;