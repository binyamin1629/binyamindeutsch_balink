const fs = require('fs');
const data = require('../db/dataHandling.js');

const controller = {};





controller.getAllUsers = () => {



    return new Promise((resolve, reject) => {

        fs.readFile('backend/db/users.json', (err, data) => {
            if (err) {
                return reject(err)
            } else {
                resolve(data);
            }
        })
    })



}

controller.addUser = (body) => {

    return new Promise((resolve, reject) => {
        let Lastuser;
        fs.readFile('backend/db/users.json', (err, data) => {
            if (err) {
                return reject(err)
            } else {
                
                
                var arr = JSON.parse(data);
                console.log(arr,"arr")
                if (arr.length == 0) { 
                    body.id = 1;
                }else{
                     Lastuser = arr[arr.length - 1];
                     body.id = parseInt(Lastuser.id) + 1;
                }
               
               
               
                arr.push(body)
                fs.writeFile('backend/db/users.json', JSON.stringify(arr), (err, data) => {
                    if (err) {

                    }
                    else {
                        resolve(data);
                    }
                })

            }
        })
    })
}

controller.editUser = (body) => {
    return new Promise((resolve, reject) => {

        fs.readFile('backend/db/users.json', (err, data) => {
            if (err) {
                return reject(err)
            } else {

                var arr = JSON.parse(data);
                if (!arr.find(u => u.id) == body.id) {
                    throw new Error('failed')
                }
                arr.forEach(u => {
                    if (u.id == body.id) {
                        u.first_name = body.first_name
                        u.last_name = body.last_name
                        u.age = body.age
                        u.phone = body.phone
                    }
                })
                fs.writeFile('backend/db/users.json', JSON.stringify(arr), (err, data) => {
                    if (err) {

                    }
                    else {
                        resolve(data);
                    }
                })

            }
        })
    })
}


controller.deleteUser = (id) => {
    
    return new Promise((resolve, reject) => {

        fs.readFile('backend/db/users.json', (err, data) => {
            if (err) {
                return reject(err)
            } else {

                var arr = JSON.parse(data);
                if (!arr.find(u => u.id) == id) {
                    throw new Error('failed')
                }

                let deletedArray = arr.filter((u) => u.id != id)

                 
                fs.writeFile('backend/db/users.json', JSON.stringify(deletedArray), (err, data) => {
                    if (err) {

                    }
                    else {
                        resolve(data);
                    }
                })

            }
        })
    })


}


module.exports = controller;