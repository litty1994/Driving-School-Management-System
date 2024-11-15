
const users = require('../models/user')
const jwt=require("jsonwebtoken")
//controller method for user register
exports.register = async (req, res) => {
    console.log("inside user register controller");
    console.log(req.body);
    console.log("inside user register controller");
    const { username, email, password } = req.body//const username=req.body.username
    //chech email id present or not
   
    try
    {
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {
            res.status(400).json("account already exist")
        }
        else {
            console.log("user not exist"); 
            const newUser = new users({


                username: username,
                email: email,
                password: password
               
    
             })
             await newUser.save()
    
             res.status(200).json("user registered successfully")

           // res.status(200).json("Account not exist..........")

        
    }
    }
    catch(err)
    {
        res.status(401).json("Registration Failed due to",err)
    }
        
    
}
exports.login=async (req,res)=>{
    console.log("inside login controller");
    console.log(req.body);
    const { email, password } = req.body
    const existingUser = await users.findOne({ email: email, password: password })//first email-from collection,next email=from req body
      if (existingUser) {
        const token = jwt.sign({ userId: existingUser._id }, "userpwd123")
         console.log(token);
     res.status(200).json({data:existingUser, token: token})
        
      }
      else{
        res.status(401).json("No user found...Invalid email or password")
        
      }
    
}