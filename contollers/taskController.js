const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');

// create new task
const createTask = async (req, res) => {
    const {title, assignedTo} = req.body
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            msg: error.message
    })
}
}

// get all tasks
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

// getting a single task
const getTask = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`no task with id ${id} found`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }

}

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`no task with id ${id} found`)
        }
        res.status(200).send('Deleted successfully')
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

// update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate({
            _id: id
        }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json(`no task with id ${id} found`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }

}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
};