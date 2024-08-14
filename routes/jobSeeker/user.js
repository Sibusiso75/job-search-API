const express = require("express")
const router = express.Router()
const User = require("../../models/JobSeeker/User")
const {verifyToken,verifyTokenAndAuthorization,verifyAdmin} = require("../verifyToken")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const nodemailer = require("nodemailer")

const highestQualification =["Grade 12", "Grade 11","Grade 10", "Higher Certificate","Diploma","Degree","Masters", "PHD"]
router.get("/users", (request, response)=>{
  
    response.status(200).json([{id:1,jobTitle:"Software Developer",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27631008729,highestQualification:highestQualification[3],age:27,username:"Sibusiso Matebese", gender:"Male",email:"sibusisomatebese75@gmail.com", isAdmin:"Yes", password:"*************",
}
  , {id:2,jobTitle:"Software Developer",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27624192299,highestQualification:highestQualification[4],age:27,username:"Sthera Tini", gender:"Male",email:"stheratini15@gmail.com", isAdmin:"No", password:""},
  {id:3,jobTitle:"Business Analyst",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27787017510,highestQualification:highestQualification[3],age:22,username:"Cindy Baba", gender:"Female",email:"sindisiwebaba@gmail.com", isAdmin:"No", password:"***"},
  {id:4,jobTitle:"Cashier",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27744973315,highestQualification:highestQualification[4],age:25,username:"Nwabisa Mbunge", gender:"Female",email:"nwabisambunge12@gmail.com", isAdmin:"No", password:"**********"},
  {id:5,jobTitle:"Business Analyst",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27791516405,highestQualification:highestQualification[5],age:24,username:"Bulelwa Cakwebe", gender:"Female",email:"bulelwacakwebe12@gmail.com", isAdmin:"No", password:"*********"},
  {id:6,jobTitle:"Teacher",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27713165825,highestQualification:highestQualification[5],age:32,username:"Siyasanga Dobela", gender:"Male",email:"siyasangadobela2@gmail.com", isAdmin:"No", password:"************"},
  {id:7,jobTitle:"Sound Engineer",province:"Eastern Cape",suburb:"Kwa-Nobuhle",postalCode:6242,phoneNumber:27716465182,highestQualification:highestQualification[3],age:25,username:"Phumelela Platjiees", gender:"Male",email:"phumelelaplatjiees202@gmail.com", isAdmin:"No", password:"********"}
  ])
  })

// router.get("/users",verifyAdmin, (request, response)=>{
//   response.status(200).json([{id:1,age:27,username:"Sibusiso Matebese", gender:"Male",email:"sibusisomatebese75@gmail.com", isAdmin:"Yes", password:"*************"}
// , {id:2,age:27,username:"Sthera Tini", gender:"Male",email:"stheratini15@gmail.com", isAdmin:"No", password:""},
// {id:3,age:25,username:"Kevin de Bruyne", gender:"Male",email:"kevindebruyne@gmail.com", isAdmin:"No", password:"***"},
// {id:4,age:25,username:"Nwabisa Mbunge", gender:"Female",email:"nwabisambunge12@gmail.com", isAdmin:"No", password:"**********"},
// {id:5,age:24,username:"Bulelwa Cakwebe", gender:"Female",email:"bulelwacakwebe12@gmail.com", isAdmin:"No", password:"*********"},
// {id:6,age:32,username:"Siyasanga Dobela", gender:"Male",email:"siyasangadobela2@gmail.com", isAdmin:"No", password:"************"},
// {id:7,age:25,username:"Phumelela Platjiees", gender:"Male",email:"phumelelaplatjiees202@gmail.com", isAdmin:"No", password:"********"}


// ])
// })
// //Registration - POST REQUEST
router.post("/register", async (req, res)=>{
    try {
        const {username, email, password }=req.body;
        const user = await User.findOne({email})
        if(user.username==""){
          return res.json({message:"Username cannot be empty"})
        }
        if(user.email==""){
          return res.json({message:"email cannot be empty"})
        }
        if(user.password==""){
            return res.json({message:"password cannot be empty"})
          }    
          if(user.password.length<6){
            return res.json({message:"password must have at least 6 characters"})
          }
          if(user){
              return res.json({message:"User already exists"})
          }
        
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser =  new User({
             username, email, password:hashedPassword
        })
        await newUser.save()
        return res.json({status:true,message:"User has been registered successfully"})
    } catch (error) {
        return res.json(error)
    }
    
})
//User login
router.post("/login", async(req, res)=>{
    const {email ,password} =req.body;
    const user= await User.findOne({email})
     if(!user.email){
      return res.json({message:`Your  email "${user.email}" is not registered`})
     }
  
     const isPasswordValid = await bcrypt.compare(user.password,password)
      if(!isPasswordValid){
         return res.json({message:"Password is incorrect. Please try again."})
      }
      
      const token = jwt.sign({
        id:user._id,
        email:user.email,
        isAdmin:user.isAdmin,
      }, process.env.KEY, {expiresIn:"1d"})
      res.cookie("token", token, {httpOnly:true, maxAge:360000})
      return res.json({status:true,message:"User successfully logged in"})
})

router.get("/verify",verifyTokenAndAuthorization, async (req, res)=>{
  return res.json({ message:"Authorized", id:req.user.id, username:req.user.username})
})
router.get("/logout", async (req, res)=>{
  res.clearCookie("token")
  res.json({status:true})
})

router.post("/personalDetails/:id", verifyTokenAndAuthorization, async (req, res)=>{
  const {country, DOB,ethnicity,highestLevelOfEducation,highestCareerLevel,industry}=req.body
})
router.post("/work-experience", verifyTokenAndAuthorization, async(req, res)=>{
  const {jobTitle, companyName, country,city,province,from,to}=req.body;
  
})
router.post("/skill", verifyTokenAndAuthorization, async (req, res)=>{
  const {skillName,yearsOfExperience}=req.body;

})

// router.post("/forgot-password", async (req, res)=>{
//   try {
//     const {email} =req.body;
//     const user = await User.findOne({email})
//     if(user.email==""){
//       return res.json({message:"Please enter a value"})
//     }
//     if(!user){
//       return res.json({message:"User doesn't exist"})
//     }
//     const token = jwt.sign({
//       id:user._id,
//       email:user.email
//     }, process.env.KEY, {expiresIn:"5m"})
//     const createTransport = nodemailer.createTransport({
//       auth:{
//         user:process.env.EMAIL,
//         password:process.env.PASSWORD,
//       }

//     })
//     const mailOptions = {
//       from:process.env.PASSWORD,
//       to:password,
//       subject:"Reset password",
//       html:`<p>HI ${user.name}</p> 
//     <p>Click the link below</p>
//     <a href=${token}>Reset password link</a>
//       `
//     }
//     createTransport.sendMail(mailOptions, (err, result)=>{
//       if(err){
//         return res.json({message:"Failed to send email"})
//       }
//       else {
//         return res.json({status:true,message:"Email sent successfully"})
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// })
// router.post("/reset-password/:token", async (req, res)=>{
//   try {
//     const {password}= req.body;
//     const token = req.params;
//     if(password==""){
//       res.json({message:"Pasword is required"})
//     }
//     if(!token){
//       res.json({message:"Token is invalid"})
//     }
//     const decoded = jwt.verify(token, process.env.KEY)
//     const id = decoded.id;
//     const hashedPassword = await bcrypt.hash(password,10)
//     await User.findByIdAndUpdate({_id:id}, {password:hashedPassword})
    
//   } catch (error) {
//     console.log(error)
//   }
// })

router.put("/user/:id",verifyTokenAndAuthorization, async (req, res)=>{
  try{
   const {id} = req.params.id;
   const {username, email, gender, age}=req.body;
  await User.findByIdAndUpdate({_id:id}, {
    username, email, gender, age
  })
 }catch(error){
console.log(error)
 }
})

router.delete("/user/:id",verifyTokenAndAuthorization, async (req, res)=>{
  try{
   const id = req.params.id;
   await User.findByIdAndDelete({_id:id})
  }catch(error){
    console.log(error)
  }
})


      




  router.put("/updateUser/:id", verifyAdmin, async (req, res)=>{
    const {name, email, password, isAdmin}=req.body;
    await User.findByIdAndUpdate({_id:req.params.id},{name, email, password, isAdmin})
    return res.json({status:true, message:"user updated successfully"})
  })
  router.delete("/deleteUser/:id", verifyAdmin, async (req, res)=>{
    const id = req.params.id;
   await User.findByIdAndDelete({_id:id})
   return res.json({message:"User has been deleted"})
  })
  router.post("/adminLogin", async (req, res)=>{
    const {email,password}= req.body;
    const user = await User.findOne({email})
    if(user.email==""){
       return res.json({message:"Email cannot be empty"})
    }
    if(user.password==""){
      return res.json({message:"Password cannot be empty"})
   }
    
    if(user.isAdmin==true){
      const isPasswordValid = await bcrypt.compare(user.password,password)
        if(!isPasswordValid){
          return res.json({message:"Password is incorrect. Please try again"})
        }
        const token = jwt.sign({
          _id:user._id,
          email:user.email,
          isAdmin:user.isAdmin,

        }, process.env.KEY, {expiresIn:"1d"})
        res.cookie("token", token, {httpOnly:true, maxAge:360000})
        return res.json({status:true, message:"Successfully logged in"})
    }
    else{
      return res.json({message:"You're not an administrator"})
    }
  })
  router.get("/admin", verifyAdmin, async (req, res)=>{
    try {
       const users = await User.find()
       return res.json(users)
        
    } catch (error) {
        return res.json({message:"error"})
        
    }
})
module.exports =router