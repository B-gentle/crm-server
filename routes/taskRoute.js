const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../contollers/taskController');
const router = express.Router();


router.post('/task', createTask);
router.get('/task', getTasks);
router.get('/task/:id', getTask);
router.delete('/task/:id', deleteTask);
router.patch('/task/:id', updateTask);
router.put('/task/:id', updateTask);

module.exports = router