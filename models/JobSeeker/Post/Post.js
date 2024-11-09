const mongoose = require("mongoose")

const postSchema= new mongoose.Schema({
    userId:{ref:"User", type:mongoose.SchemaTypes.ObjectId, required:true},
    username:{type:String, required:true},
    post:{type:String, required:true},
},{timestamps:true})
const model = mongoose.model("Post", postSchema)
module.exports = model
