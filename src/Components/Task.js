import React, { useState } from 'react';

function Task({ task, onEdit, onDelete, onTaskCompleted }) {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onTaskCompleted(task.id); 
  };

  const handleEditClick = () => {
    onEdit(task);
  };

  return (
    <div className={`task ${isChecked ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>{task.description}</span>
      <div className="task-buttons">
        <button onClick={handleEditClick}>✏️</button>
        <button onClick={() => onDelete(task.id)}>❌</button>
      </div>
    </div>
  );
}

export default Task;
