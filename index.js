// const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// const cookieParser=require("cookie-parser")
// dotenv.config()
// app.use(cookieParser())

const express = require("express")
const app = express()
const userRoute = require("./routes/jobSeeker/user")
const jobRoute = require("./routes/job")
const articleRoute = require("./routes/article")
const reportRoute = require("./routes/report")
const employerRoute = require("./routes/employer")
const cors = require("cors")


app.use(express.json())
app.use(cors())

// app.use(cors({
//   origin:["http://locahost:5173"],
//   credentials:true
// }))
// mongoose.connect(process.env.MONGO_URI).then(()=>{
//   console.log("MongoDB connected")
// }).catch((error)=>{
//   console.log(error)
// })


app.get("/", (request, response)=>{
  response.status(200).send("Hello world from the server")
})
app.use("/", userRoute)
app.use("/", jobRoute)
app.use("/", articleRoute)
app.use("/", employerRoute)
app.use("/", reportRoute)

app.all("*", (request, response)=>{
  response.status(404).send("404 - Page not found")
})
app.listen(5000, ()=>{
  console.log("Listening to port 5000")
})