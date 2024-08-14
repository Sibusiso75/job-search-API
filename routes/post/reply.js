// const express = require("express")
// const { verifyTokenAndAuthorization } = require("../verifyToken")
// const router = express.Router()
// const Reply = require("../../models/JobSeeker/Post/Reply")
// const Post = require("../../models/JobSeeker/Post/Post")
// const User = require("../../models/JobSeeker/User")
// const Comment = require("../../models/JobSeeker/Post/Comment")





// router.post("/add-reply/:postId", verifyTokenAndAuthorization, async (req, res)=>{
//    const id = req.params.id;
//    const foundUser = await User.findOne({id:req.user._id})
//    const postFound = await Post.findOne({_id:id})
//    const commentFound = await Comment.findOne({_id})
//    const {reply}= req.body;

//    if(!foundUser){
//           return res.json({message:"User not found"})
//    }
//    if(!postFound){
//           return res.json({message:"Post not found"})
//    }
//    if(!commentFound){
//           return res.json({message:"Post not found"})
//    }
//    const newReply = new Reply({
//           userId:foundUser._id,
//           postId:postFound._id,
//           commentId:commentFound._id,
//           reply,
//    })
//    await newReply.save()
// })

// router.put("/edit-reply/:postId",  async (req, res)=>{
//           const id = req.params.id;
//           const foundUser = await User.findOne({id:req.user._id})
//           const postFound = await Post.findOne({_id:id})
//           const commentFound = await Comment.findOne({_id})
//           const {reply}= req.body;
       
//           if(!foundUser){
//                  return res.json({message:"User not found"})
//           }
//           if(!postFound){
//                  return res.json({message:"Post not found"})
//           }
//           if(!commentFound){
//                  return res.json({message:"Post not found"})
//           }
//           await Reply.findByIdAndUpdate({_id}, {reply})



// })



