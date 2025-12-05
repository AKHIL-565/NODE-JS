const pool = require('../db.js');

const getTask = async () => {
  const res = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  return res.rows;
};


const createTask = async (text) => {
  const res = await pool.query(
    'INSERT INTO tasks (text) VALUES ($1) RETURNING *',
    [text]
  );
  return res.rows[0];
};

const updateTask = async (id, text, completed) => {
  const res = await pool.query(
    `UPDATE tasks  SET text = COALESCE($1, text), 
       completed = COALESCE($2, completed)
     WHERE id = $3  RETURNING *`,
    [text, completed, id]
  );
  return res.rows[0];
};


const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  return true;
};

module.exports = { getTask, createTask, updateTask, deleteTask };
