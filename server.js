require('dotenv').config();
const app =require('./backend/app');
const server = require('http').createServer(app);
server.listen(process.env.PORT,()=>{
    console.log("server started at "+process.env.PORT)
});    