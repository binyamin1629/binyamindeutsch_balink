const client = require('../db/dbPostgresqlConf.js');

const controller = {};





controller.getAllUsers = async () => {


    try {
        let dbData = await client.query('SELECT * FROM users');
        
        if(!dbData.rows.length>0){return new Error('we had some truble getting data');}
        return dbData.rows;
    } catch (error) {
        console.log(error)
    }

}

controller.addUser = async (body) => {


    try {
        let addUser = await client.query(
            "INSERT INTO users (first_name,last_name,age,phone) VALUES ($1,$2,$3,$4) RETURNING * ",
            [body.first_name, body.last_name, body.age, body.phone]
        );
        if(!addUser.rows[0]) return new Error('there was a problom inserting data');
        return addUser.rows[0];

    } catch (error) {
        console.log(error)
    }

}

controller.editUser = async (body) => {




    try {
        let userID = await client.query(" SELECT id FROM users  WHERE id = $1",
        [body.id]);

        if (userID.rows.length > 0){
            let  updateUser = await client.query(" UPDATE users SET first_name=$1  ,last_name=$2,age=$3,phone= $4 WHERE id = $5 "
                 , [body.first_name, body.last_name, body.age, body.phone, body.id])
        return updateUser.rows;
        }
        else{
            return new Error('user not found');
        }

    } catch (error) {
        console.log(error)
    }

}


controller.deleteUser = async (id) => {


    try {
        let userID = await client.query(" SELECT id FROM users  WHERE id = $1",
        [id]);
        if(!userID) return new Error('user not found');
          
       
        let deletedUser= await client.query("DELETE FROM users where id =$1;",[id])

    } catch (error) {
        console.log(error)
    }

}


module.exports = controller;