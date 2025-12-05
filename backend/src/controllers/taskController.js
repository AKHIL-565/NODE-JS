const {getTask, createTask,updateTask,deleteTask} = require('../services/taskService.js');

const getAllTask = async (req, res) => {
  const tasks = await getTask();
  res.json(tasks);
};


const addTask = async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Task text is required' });
  }

  const task = await createTask(text.trim());
  res.status(201).json(task);
};


const editTask = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const task = await updateTask(id, text, completed);
  res.json(task);
};


const removeTask = async (req, res) => {
  const { id } = req.params;
  await deleteTask(id);
  res.status(204).send();
};


module.exports = { getAllTask,addTask,editTask,removeTask};
