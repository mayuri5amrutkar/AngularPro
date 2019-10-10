//body.parser was an intercepter - > which checked if the data was in json form if not then coverted and passed ahead.

var express = require('express')
var app = express();
var bp = require('body-parser')
var _ = require('underscore')    
var middleware = require('./middleware.js')
var cors = require('cors')

app.use(middleware.requireAuth) // if we dont need this to be globally used, we can pass it as second parameter to any of the function 

app.use(express.static('public'))
            //when it says public means it goes and gets index.html file.
app.use(bp.json())

// app.set("view engine", "ejs") // this ejs engine is called templating. which we use in all our day to day activities
// app.set("views", __dirname + "/views")
// app.set("view options",{layout:false})
app.use(bp.urlencoded({extended:true}))
app.use(cors())
// app.get('/', function(req, res){
//     res.render('index')
// })

var uid = 1
var userdata=[
    /*{taskname:"purchase veggis", completed: true},
    {taskname:"playying games", completed: false},
    {taskname:"purchase veggis", completed: true}*/
]
app.post('/posttasks'/*,middleware.requireAuth*/, function(req, res){
    var data = req.body
    console.log(data);
    data.id = uid++
    userdata.push(data);
    res.send('data is added')
})
app.get('/loadtasks',  function(req, res){
    res.json(userdata)
})
app.get('/loadtasks/:id',middleware.logger,(req, res)=>{
    var todoid = parseInt(req.params.id)
    //console.log("called", req.params.id);
    var mct = _.findWhere(userdata, {id:todoid});
    // userdata.forEach(function(todo){
    //     if(todoid==todo.id){
    //         mct = todo
    //     }
    // })
    if(mct){
        res.json(mct)
    }
    else{
        res.status(404).send()
    }
} )
app.delete('/deletedata/:id', (req, res)=>{
    var todoid = parseInt(req.params.id)
    var mct = _.findWhere(userdata,{id:todoid})

    if(!mct){
        res.status(404).json({"error": "id not matched"})
    }
    else{
        userdata=_.without(userdata, mct);
        res.json(mct)
    }    
})

app.put('/putdata/:id', (req, res)=>{
    var todoid = parseInt(req.params.id)
    var mct = _.findWhere(userdata,{id:todoid})
    var body = _.pick(req.body, 'taskname', 'completed')
    var va = {}
    if(!mct){
        res.status(404).json({"error": "id not matched"})
    }
    else{
        va.taskname = body.taskname;
        va.completed = body.completed;
        _.extend(mct, va);
        res.json(mct)
    }
})

app.listen(4000, function(){
    console.log('server is ready')
})
