const selectCategory = require('../assets/js/selectedCategory');

var taskList = [
    {
        description: "task1",
        due_date: "12-10-2000",
        category: "Work"
    },
    {
        description: "task2",
        due_date: "12-10-2000",
        category: "Personal"
    },
    {
        description: "task3",
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
    taskList.push({
        description: req.body.description,
        due_date: req.body.due_date,
        category: selectCategory.category(req.body.category)
    });
    
    res.redirect('/');
}

module.exports.deleteTask = function(req, res){
    console.log(req.query);
    let description=req.query.id;
    const index = taskList.findIndex(task => task.description == description);
    console.log(index);
    if(index!=-1){
        taskList.splice(index, 1);
    }

    return res.redirect('/');
}