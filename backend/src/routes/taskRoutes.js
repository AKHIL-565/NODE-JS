const express = require('express');
const {getAllTask,addTask,editTask,removeTask} = require('../controllers/taskController.js');


const router = express.Router();

router.get('/', getAllTask);
router.post('/', addTask);
router.put('/:id', editTask);
router.delete('/:id', removeTask);

module.exports = router;

