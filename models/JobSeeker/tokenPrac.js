const mongoose =require("mongoose")

const tokenSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    token:{type:String, required:true}

}, {timestamps:true})
module.exports = mongoose.model("Token", tokenSchema)
