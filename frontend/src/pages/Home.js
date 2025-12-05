import React, { useEffect, useState } from 'react';
import client from '../api/Axios.jsx';
import TodoForm from '../components/TodoForm.jsx';
import TodoItem from '../components/TodoItem.jsx';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await client.get('/api/tasks');   // ✅ FIXED
        setTasks(response.data);
      } catch {
        setError('Failed to load tasks');
      }
    };

    fetchTasks();
  }, []);

  
  const addTask = async (text) => {
    try {
      const response = await client.post('/api/tasks', { text });  // ✅ FIXED

      
      setTasks((prev) => [response.data, ...prev]);
    } catch {
      setError('Unable to add task');
    }
  };


  const updateTask = async (id, data) => {
    try {
      const response = await client.put(`/api/tasks/${id}`, data); // ✅ FIXED

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? response.data : task))
      );
    } catch {
      setError('Unable to update task');
    }
  };

  
  const deleteTask = async (id) => {
    try {
      await client.delete(`/api/tasks/${id}`);   // ✅ FIXED

      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch {
      setError('Unable to delete task');
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>

      {error && <p className="error">{error}</p>}

      <TodoForm onAdd={addTask} />

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default Home;
