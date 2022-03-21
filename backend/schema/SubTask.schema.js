const mongoose = require('mongoose');

const SubTaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, default: false},
})

let SubTask = mongoose.model('subtask', SubTaskSchema)

module.exports = SubTask;