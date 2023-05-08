const express = require('express')
const app = express()
const port = process.env.PORT||5000 
const cors = require('cors');

// middleware
app.use(cors());
//for solve undefine problem
app.use(express.json())

const users=[
    {id:1,name:"shagor",email:"shagor@gmail.com"},
    {id:2,name:"min",email:"min@gmail.com"},
    {id:3,name:"foisal",email:"foisal@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send("server is running ... ")
})

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log("posted");
    console.log(req.body);
    newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser)
    res.send(newUser)
})
app.listen(port,()=>{
    console.log(`server is running port ${port}`);
})