const mongoose = require("mongoose")

const employerSchema =  new mongoose.Schema({
   name:{type:String, required:true},
    email:{type:String, required:true,unique:true, lowercase:true},
    password:{type:String, required:true, minLenghth:6},
    isAdmin:{type:Boolean, default:false}
}, {timeStamps:true})

const model = mongoose.model("Employer", employerSchema)
module.exports = model