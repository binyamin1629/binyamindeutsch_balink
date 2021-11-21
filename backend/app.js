const express = require("express");
const cors=require('cors');
const userRouter=require('./routes/user.js');
const path=require('path');
const app = express();
app.use(express.json());

app.use(cors())


// const root=require('path').join(__dirname,'build');
// app.use(express.static(root))

// app.use('/*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'build','index.html'))
// })

app.get('/',(req,res)=>{
    res.redirect('/users');
})

app.use("/users", userRouter);
module.exports = app;
