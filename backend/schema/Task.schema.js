const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: Boolean, default: false},
    sub_task: [{type: mongoose.Schema.Types.ObjectId, ref: 'subtask'}]
})

let Task = mongoose.model('task', TaskSchema);

module.exports = Task