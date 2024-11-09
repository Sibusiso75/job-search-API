// const express = require("express")
// const router = express.Router()
// const bcrypt = require("bcrypt")
// const User = require("../../models/JobSeeker/User")
// const Token = require("../../models/JobSeeker/token")
// const sendEmail = require("../../utilis/sendEmail")


// router.post("/register", async (req, res)=>{
//     try {
//         const {username, email, password} =req.body;
//         let user = await User.findOne({email})
//     if(user.username==""){
//         return res.json({message:"Username is required"})
//     }
//     if(user.email==""){
//         return res.json({message:"Email is required"})
//     } if(user.password==""){
//         return res.json({message:"password is required"})
//     }
//         if(user){
//             return res.json({message:"User already exists"})
//         }
//    const hashedPassword = await bcrypt.hash(password,10)
//         user = await new User({
//             username, email,password:hashedPassword
//         }).save()

//         const token = await new Token({
//             userId:user._id,
//             token:crypto.randomBytes(32).toString("hex")
//         }).save()
//         const url =`http://localhost:5173/users/${user._id}/verify/${token.token}`
//         await sendEmail(user.email, "verify email", url)
//         return res.json({status:true, message:"An email link has been sent to your account, please verify it"})

//     } catch (error) {
//         console.log(error)
//     }

// })

// router.post("/login", async (req, res)=>{
//     const {email, password}= req.body;
//     const user = await User.findOne({email})
//     if(user){
//         return res.json({message:"User already exists"})
//     }
//     const passwordValid = await bcrypt.compare(password, user.password)
//     if(!passwordValid){
//         return res.json({messsage:"Password is incorrect"})
//     }
//     if(!user.verified){
//         let token = await Token.findOne({userId:user._id})
//         if(!token){
//             token = await new Token({
//                 userId:user._id,
//                 token:crypto.randomBytes(32).toString("hex")

//             }).save()

//         }
//         return res.json({message:"An email has been sent to your account please verify it"})
//     }
//     const accessToken = jwt.sign({
//         username:user.username,
//         email:user.email,
//         isAdmin:user.isAdmin,
//         _id:user._id,
//     }, process.env.KEY, {expiresIn:"1d"})
//     res.cookie("token", accessToken, {httpOnly:true,maxAge:360000})
// return res.json({status:true,message:"User logged In"})

// })
