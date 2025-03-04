// getting-started.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    deadline: Date,
    isComplete: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;