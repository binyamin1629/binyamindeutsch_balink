const router = require("express").Router();
const controller = require('../controllers/userController.js');

//get all users...
router.get("/", (req, res) => {
    let result = controller.getAllUsers();
    //console.log("got to routr");
 

    
    result.then((data) => {
        //console.log(JSON.parse(data));
        res.send(JSON.parse(data));
    }, (err) => {
        // res.sendStatus(500);
        res.send('ther was a problom');
    });

})



//add user
router.put("/add-user",vlidateUser, (req, res) => {
   
   let result=controller.addUser(req.body);
   result.then((data) => {
    res.send("user has been added");
   },(err)=>{
       console.log(err)
    res.send(err);
   })
   
})

router.delete('/delete-user',(req,res)=>{
   
    let result= controller.deleteUser(req.body.id);
    result.then((data) => {
        res.send("user has been deleted")
    },(err)=>{
        res.send(err);
    })
})

//update user
router.post('/edit-user', vlidateUpdatedUser,vlidateUser,(req, res) => {
    console.log(req.body)
    let result=controller.editUser(req.body);
    
   result.then((data) => {  
        res.send('user has been updated');
   },(err)=>{
       console.log(err)
    res.send(err);
   })
})

function vlidateUpdatedUser(req,res,next){

        if(!req.body.id){
            return res.send("no such user");
        }       
        next();
}

function vlidateUser(req,res,next){
    console.log(req.body)
    if(req.body.first_name==""||req.body.last_name==""||req.body.age==""||req.body.phone==""){
       return res.send("invalid fildeds given!!");
    }
    if(isNaN(parseInt(req.body.age))||isNaN(parseInt(req.body.phone))){
       return res.send("Filed must be a number");
    }   
    let Age=parseInt(req.body.age);
    if(Age<0||Age>120){
        return res.send("invalid age!");
    }
    console.log(req.body.phone.lenght)
    // if(req.body.phone.lenght==11){
    //    return res.send("invalid phone number!");
    // }
    next();
}



module.exports = router;