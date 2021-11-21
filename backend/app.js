const express = require("express");
const cors=require('cors');
const userRouter=require('./routes/user.js');
const path=require('path');
const { dirname } = require("path");
const app = express();
app.use(express.json());

app.use(cors());

app.use(express.json());
app.use(express.static(path.join('D:/ba-link-home-task/frontend/usermanager/build/index.html')))
//console.log(__dirname,'D:/ba-link-home-task/frontend/usermanager/build/index.html');
app.use('/*',(req,res)=>{
    res.sendFile(path.join('D:/ba-link-home-task/frontend/usermanager/build/'));
})
//D:\ba-link-home-task\frontend\usermanager\build\index.html
app.get('/',(req,res)=>{
    res.redirect('/users');
})

app.use("/users", userRouter);
module.exports = app;
