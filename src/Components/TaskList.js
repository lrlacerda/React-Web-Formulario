import React from 'react';
import Task from '../Components/Task';

function TaskList({ tasks, onEdit, onDelete, onTaskCompleted }) {  
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onEdit={() => onEdit(task)} 
          onDelete={() => onDelete(task.id)} 
          onTaskCompleted={() => onTaskCompleted(task.id)}  
        />
      ))}
    </div>
  );
}

export default TaskList;
