import React from 'react';

const newTask = (task) => {
  const division = document.querySelector('div');
  const h5 = document.createElement('h5');
  h5.innerHTML = task;
  division.appendChild(h5);
};

const TaskList = ({ addTask }) => {
  return (
    <div> 
      {newTask(addTask)}    
    </div>
  );
};

export default TaskList;
