import React, { useContext, createContext } from 'react';
export const taskData = createContext();

export const TaskInput = () => {
  const { setTasks } = useContext(taskData);

  const addTask = () => {
    const input = document.querySelector('input');
    const taskValue = input.value.trim();
    if (taskValue !== '') {
      setTasks(prev => [...prev, taskValue]);
      input.value = ''; // clears input
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input placeholder='Enter your task' />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};