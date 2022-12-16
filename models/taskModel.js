const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a task title"]
    },

    priority: {
        type: String,
        required: true,
        default: "queue"
    },

    assignedTo: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task