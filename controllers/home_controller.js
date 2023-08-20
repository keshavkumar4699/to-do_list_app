const express = require('express');
const app = express();

app.use(express.urlencoded());

var taskList = [
    {
        description: "task 1",
        due_date: "12-10-2000",
        category: "Work"
    },
    {
        description: "task 2",
        due_date: "12-10-2000",
        category: "Personal"
    },
    {
        description: "task 3",
        due_date: "12-10-2000",
        category: ""
    }
]

module.exports.home = function(req, res){
    return res.render('home',{
        title: "Home",
        tasks: taskList
    });
};

module.exports.addTask = function(req, res){
    return console.log(req);
}