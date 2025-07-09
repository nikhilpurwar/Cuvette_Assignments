import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = () => {
    onEdit(todo.id, editText);
  };

  return (
    <div style={{ marginBottom: '8px' }}>
      {todo.editing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => onToggle(todo.id)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;