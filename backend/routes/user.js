const router = require("express").Router();
const controller = require('../controllers/userController.js');

//get all users...
router.get("/", async (req, res) => {

    try {
        let result =await controller.getAllUsers();     
        res.status(200).send(result)
       // res.send(200,result)
    } catch (err) {
        res.status(404).send('ther was a problom')

    }

})



//add user
router.put("/add-users", vlidateUser, async (req, res) => {

    try {

        let result=await controller.addUser(req.body);
        res.status(200).send("user has been added")
        
        
    } catch (err) {
        console.log(err)
        res.status(404).send(err);
    }
   
})

router.delete('/delete-users',async (req,res)=>{

    try {
        let result= await controller.deleteUser(req.body.id);
        res.status(200).send("user has been deleted")
    } catch (err) {
        res.status(404).send(err);
    }
   
    
  
})

//update user
router.post('/edit-users', vlidateUpdatedUser,vlidateUser, async(req, res) => {

    //getting id in body on need to do /edit-user
    try {
        let result=await controller.editUser(req.body);      
        res.status(200).send('user has been updated');
    } catch (err) {
        res.status(404).send(err);
    }
    
  
    
 
})

async function vlidateUpdatedUser(req,res,next){

        if(!req.body.id){
            return await res.send("no such user");
        }       
        await next();
}

async function vlidateUser(req,res,next){
    console.log(req.body)
    if(req.body.first_name==""||req.body.last_name==""||req.body.age==""||req.body.phone==""){
       return await res.send("invalid fildeds given!!");
    }
    if(isNaN(parseInt(req.body.age))||isNaN(parseInt(req.body.phone))){
       return await res.send("Filed must be a number");
    }   
    let Age=parseInt(req.body.age);
    if(Age<0||Age>120){
        return await res.send("invalid age!");
    }
    console.log(req.body.phone.lenght)
    // if(req.body.phone.lenght==11){
    //    return res.send("invalid phone number!");
    // }
   await next();
}



module.exports = router;