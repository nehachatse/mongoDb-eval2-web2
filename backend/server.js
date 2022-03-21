const express = require('express');
let mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://neha:neha123@cluster0.3eq5o.mongodb.net/tasks?retryWrites=true&w=majority';
let Task = require('./Schema/Task.schema');
let SubTask = require('./Schema/SubTask.schema');

let app = express();
app.use( express.json() );

const connect = () => {
    return mongoose.connect(DB_URL)
};

app.get('/tasks', async (req, res) => {
    let tasks = await Task.find();
    res.status(200).json(tasks);
})

app.get('/tasks/:id', async (req, res) => {
    let subtask = await Task.findById(req.params.id);
    res.status(200).json(subtask);
})

app.get('/sub-task/:id', async (req, res) => {
    let subtask = await SubTask.findById(req.params.id);
    res.status(200).json(subtask);
})

app.get('/sub-task', async (req, res) => {
    let subtasks = await SubTask.find();
    res.status(200).json(subtasks);
})

app.post('/tasks', async (req, res) => {
    let createdTask = await Task.create(req.body);
    res.status(200).json(createdTask);
})

app.post('/sub-tasks', async (req, res) => {
    let createdSubTask = await SubTask.create(req.body);
    res.status(200).json(createdSubTask);
})
app.delete('/tasks/:id', async (req, res) => {
    let deleted = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deleted)
})

// app.post('/author', async (req, res) => {
//     let createdAuthor = await Author.create(req.body);
//     res.status(200).json(createdAuthor);
// })

app.listen(8000, () => {
    try{
        connect()
        console.log("listing...")
    }catch(e){
        res.status(200).send(e.message);
    }
})