const mongoose=require("mongoose")

const data=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    c_password:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },

})

module.exports=mongoose.model("Users", data)