const mongoose =require("mongoose")

const jobSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true, lowercase:true},
    category:{type:String, required:true},
    salary:{type:String, required:true},
    url:{type:String},
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
}, {timestamps:true})
module.exports = mongoose.model("Job",jobSchema)
