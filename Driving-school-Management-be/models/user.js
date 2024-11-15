var mongoose=require("mongoose")
var userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:52
    },
    email:{
        type:String,
        require:true,
        unique:true
        
    },
    password:{

        type:String,
        require:true,
    },
})
module.exports=mongoose.model("users",userSchema)//users-database collection name