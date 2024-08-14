const mongoose = require("mongoose")

const commentSchema= new mongoose.Schema({
    postId:{ref:"Post",  type:mongoose.SchemaTypes.ObjectId},
    userId:{ref:"User",type:mongoose.SchemaTypes.ObjectId, required:true},
    comment:{type:String, required:true},
    username:{type:String, required:true},
   
},{timestamps:true})
module.exports = mongoose.model("Comment", commentSchema)
