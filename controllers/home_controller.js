const db = require('../config/mongoose.js');
const Task = require('../models/taskSchema.js');

module.exports.home = function(req, res){
    Task.find({}).then (taskList=>{
        return res.render('home', {
            title: 'To-Do',
            tasks: taskList
        })
    });
};

module.exports.addTask = function(req, res){
    const newTask = new Task({
        description: req.body.description,
        dueDate: req.body.due_date,
        category: req.body.category
    });
    newTask.save();

    return  res.redirect('back');
}

module.exports.deleteTask = async(req, res)=>{
    for(let id of req.query.id){
        await Task.findByIdAndDelete({_id: id});
    }
    return res.redirect('back');
}