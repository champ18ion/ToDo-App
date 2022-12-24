// importing the required modules
const express = require('express');
const bodyParser = require("body-parser");
const db = require('./config/mongoose');
const Tasks = require('./models/task')

// intializing express
const app = express();

// Parsing paths with the help of bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// setting EJS as template engine
app.set('view engine','ejs')

// static files
app.use(express.static('assets'))

// home page
app.get('/',(req,res)=>{
    Tasks.find({},(err,tasks)=>{
        if(err){
            console.log(err)
        }
        res.render('index',{
            tasks:tasks
        })
    })
    
})

// adding TAsk
app.post('/add-task',(req,res)=>{
    console.log(req.body);
    Tasks.create(
        {
            task:req.body.task,
            category:req.body.category,
            date:req.body.date
        },(err,newTask)=>{
            if(err){
                console.log(err)
            }
            res.redirect('back')
            
        }
        
    )
});

//Deleting a task
app.get('/delete', function(req, res) {
    console.log(req.query);
    var id = req.query;
    console.log(Object.keys(id));
    //Iterating over all tasks
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        //Deleting the task by using inbuilt methods
        Tasks.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log("Error in deleting the task from DB");
            }
        });
        console.log("Task-Deleted");
    }
    return res.redirect('back');
});

// starting the express server port 5000
app.listen(5000,()=>{console.log('server up and running')});