import React, { useContext, useState } from 'react';
import { taskData } from './TaskInput';

export const ShowTask = () => {
  const { tasks, setTasks } = useContext(taskData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEditing = (index, currentValue) => {
    setEditingIndex(index);
    setEditValue(currentValue);
  };

  const saveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editValue.trim();
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditValue('');
    }
  };

  const deleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => startEditing(index, task)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};