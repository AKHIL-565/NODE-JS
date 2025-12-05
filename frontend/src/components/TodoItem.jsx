import React, { useState } from 'react';

const TodoItem = ({ task, onUpdate, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const saveTask = () => {
    if (editValue.trim() === '') {
      alert('Please enter a task');
      return;
    }
    onUpdate(task.id, { text: editValue.trim() });
    setEdit(false);
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.completed}
        onChange={() => onUpdate(task.id, { completed: !task.completed })}
      />

      {edit ? (
        <>
          <input type="text"value={editValue} className="input"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="btn1" onClick={saveTask}>
            Save
          </button>
        </>
      ) : (
        <>
          <h5 className={task.completed ? 'completed' : ''}>{task.text}</h5>

         
          <div className="task-buttons">
            <button className="btn-edit" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className="btn2" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
