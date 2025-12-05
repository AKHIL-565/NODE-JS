import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const addItem = () => {
    if (value.trim() === '') {
      alert('Please enter a task');
      return;
    }

    onAdd(value.trim());
    setValue(''); 
  };

  return (
    <div className="task-form">
      <input type="text" className="input" placeholder="Enter a task..." value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="btn1" onClick={addItem}>
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;
