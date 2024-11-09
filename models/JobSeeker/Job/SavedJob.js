const mongoose =require("mongoose")

const savejobSchema = new mongoose.Schema({
    savedJobs: [
        {
          slug: { type: String, required: true },
    
          job: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Job',
            required: true,
          },
        },
      ],
    username:{type:String},
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
}, {timestamps:true})
module.exports = mongoose.model("SaveJob",savejobSchema)
