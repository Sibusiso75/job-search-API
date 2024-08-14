const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
   username:{type:String, required:true},
    email:{type:String, required:true,unique:true, lowercase:true},
    password:{type:String, required:true, minLenghth:6},
    isAdmin:{type:Boolean, default:false}
}, {timeStamps:true})
const model = mongoose.model("User", userSchema)
module.exports = model
