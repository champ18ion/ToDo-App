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

app.get('/delete/',(req,res)=>{
    console.log(req.query)
    let id = req.query.id;

    Tasks.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect("back")
    })

    
})








app.listen(5000,()=>{console.log('server up and running')});