const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
   username:{type:String, required:true},
    email:{type:String, required:true,unique:true, lowercase:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, default:true},
    verified:{type:Boolean, default:false}
    
}, {timestamps:true})
const model = mongoose.model("User", userSchema)
module.exports = model
