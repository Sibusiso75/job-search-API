const mongoose = require("mongoose")

const likesSchema = new mongoose.Schema({
       userId:{ref:"User", type:mongoose.SchemaTypes.ObjectId},
       postId:{ref:"Post", type:mongoose.SchemaTypes.ObjectId},
       username:{type:String, required:true},
       post:{type:String, required:true},
       isLiked:{type:Boolean, default:false},
},{timestamps:true})
const model= mongoose.model("Like", likesSchema)
