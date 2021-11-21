const e = require('express');
const fs = require('fs');

data = {}
data.getUsersFromJSON = () => {


    fs.readFile('backend/db/users.json',(err,data)=>{
        if(err){
            return err;
        }
        //console.log(JSON.parse(data));
        return Promise.resolve(JSON.parse(data));
    })

}





data.parseFileList=()=>{
    return new Promise((resolve, reject) => {
     fs.readFile('backend/db/users.json', 'utf8', (err, data) => {
        if (err) reject(err);
        const textByLine = data.split("\n");
        console.log("handling ");
        console.log(textByLine)
        return resolve(textByLine);
     });
    })

}

module.exports = data;








    // var arr;

    // fs.readFileSync('backend/db/users.json', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return err;
    //     } else {
    //         arr = JSON.parse(data);
    //         // console.log("in data handling: ");
    //         //console.log(arr);   


    //         return arr;
    //     }
    // })