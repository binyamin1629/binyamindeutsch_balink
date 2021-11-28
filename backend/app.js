const express = require("express");
const cors=require('cors');
const userRouter=require('./routes/user.js');
const path=require('path');
const { dirname } = require("path");    
const app = express();
app.use(express.json());
const client =require('./db/dbPostgresqlConf.js');

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join('D:/ba-link-home-task/frontend/usermanager/build/index.html')))

// app.use('/*',(req,res)=>{
//     res.sendFile(path.join('D:/ba-link-home-task/frontend/usermanager/build/'));
// })

app.get('/',(req,res)=>{
    res.redirect('/api/users');  
})

client.connect();
app.use("/api/users", userRouter);
module.exports = app;
