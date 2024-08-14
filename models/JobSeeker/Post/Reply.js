const mongoose = require("mongoose")

const replySchema = new mongoose.Schema({
          userId:{ref:"User",type:mongoose.SchemaTypes.ObjectId, required:true},
          username:{type:String, required:true},
          postId:{ref:"Post", required:true,type:mongoose.SchemaTypes.ObjectId},
          commentId:{ref:"Comment", required:true,type:mongoose.SchemaTypes.ObjectId },
          reply:{type:String, required:true}
          
},{timestamps:true})
const model = mongoose.model("Reply", replySchema)
module.exports = model