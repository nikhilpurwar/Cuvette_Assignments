import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit, onToggle }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;