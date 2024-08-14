const mongoose = require("mongoose")

const reportSchema =  new mongoose.Schema({
    reportJobId:{ref:"Job", type:mongoose.SchemaTypes.ObjectId},
   reportMessage:{type:String, required:true},
}, {timeStamps:true})
const model = mongoose.model("Report", reportSchema)
module.exports = model

