// const express = require("express")
// const router = express.Router()
// const Like = require("../models/JobSeeker/Like")
// const {verifyTokenAndAuthorization} = require("../verifyToken")

// router.post("/like-post/:postId", verifyTokenAndAuthorization,async (req, res)=>{
//           const userFound = await User.findOne({id:req.user._id})
//           const id = req.params.id; 

//           const postFound = await Post.findOne({_id:id})

//           if(!userFound){
//                     return res.json({message:"You need to login to like the post"})
//           }
//           const likePost = new Like({
//                     userId:req.user._id,
//                     postId:id,  
//                     username:req.user.username,
//                     post:postFound.post,
//                     isLiked:true,

//           })
//           await likePost.save()
//           return res.json({status:true, message:`${req.user.username} liked the post`})
// })


// module.exports = router