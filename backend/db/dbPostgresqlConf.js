const { Client } =require('pg');

const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"beny1629",
    database:"usermanager"
});


module.exports=client;
    

