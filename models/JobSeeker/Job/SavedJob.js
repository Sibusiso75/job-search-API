const mongoose =require("mongoose")

const saveJobSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true, lowercase:true},
    category:{type:String, required:true},
    url:{type:String},
    salary:{type:String, required:true},
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
      },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {timestamps:true})
module.exports = mongoose.model("SaveJob",saveJobSchema)
