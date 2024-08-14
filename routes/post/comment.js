// const express = require("express")
// const router = express.Router()
// const Comment = require("../models/JobSeeker/Article")
// const {verifyTokenAndAuthorization} = require("../verifyToken")

// router.post("/addComment/:postID/",verifyTokenAndAuthorization,async (req, res)=>{
// try {
//  const {comment } = req.body;
// const id = req.params.id; 
// const foundUser = await User.findOne({id:req.user._id})
// const foundPost = await Post.findOne({_id:id})
// if(!foundUser){
//           return res.json({message:"User not found"}) 
// }
// if(!id){
//           return res.json({message:"Post not found"}) 
// }
// const newComment = new Comment({postId:id,comment, userId:foundUser._id,
//           username:foundUser.username}) 
//  await newComment.save()
// return res.json({status:true,message:`${foundUser.username} has commented`})
// } 

// catch (error) {
//           return res.json(error)
          
// }
// })
// router.put("/editComment/:id", verifyTokenAndAuthorization, async (req, res)=>{
//           const id = req.params.id;
//           const {comment} =req.body;
//           const foundUser = await User.findOne({id:req.user._id})
// if(!foundUser){
//           return res.json({message:"User not found"})
// }
// await Comment.findByIdAndUpdate({_id:comment._id, postId:id}, {comment})

// return res.json({status:true,message:"Comment has been updated"})

// })
// router.delete("/deleteComment/:id",verifyTokenAndAuthorization, async (req, res)=>{
//           const id = req.params.id;
//           const foundUser = await User.findOne({id:req.user._id})
//           if(!foundUser){
//                     return res.json({message:"User not found"})
//           }
//           await Comment.findByIdAndDelete({_id:id})

// })
// router.get("/comments/:postId", async (req, res)=>{
//           const id = req.params.id;
//           const foundComments = await Comment.find({postId:id}).sort({createdAt:"desc"})
//           if(!foundComments){
//             return res.json({message:"Comment not found"})
//           }
//           if(!id){
//             return res.json({message:"Post not found"})
//           }
//           return res.json({status:true, allComments})
// })

// router.post("/addReply/:id", async (req, res)=>{
//   const {comment,reply}= req.body;
//   const id =req.params.id;
//   const newReply = new Comment({postId:id, replies:[{commentId:comment._id,reply, userId:req.user._id, username:req.user.username}]}) 
// })
// router.delete("/deleteReply/:id",verifyTokenAndAuthorization, async (req, res)=>{
//           const id = req.params.id;

//           const foundUser = await User.findOne({id:req.user._id})

//           if(!foundUser){
//                     return res.json({message:"User not found"})
//           }
         
//           await Comment.findByIdAndDelete({replies:[{_id:id}]})

// })



// // router.put("/:editComment/:id",verifyTokenAndAuthorization, async (req, res)=>{
// //           try {
                    
// //                    const id = req.params.id; 
// //                    const foundUser = await User.findOne({id:req.user._id})
// //                    const foundComment = await Comment.findOne({postId:id})
// //                    const commentId = foundComment.id;
// //                    if(foundComment&& foundUser){
// //                     const editComment = await Comment.findByIdAndUpdate({_id:commentId}, {
// //                               userId:foundUser._id,name:foundUser.name,
// //                               replies:[{commentId:foundComment._id,userId:foundUser._id, name:foundUser.name,reply}]
// //                               })
// //                     })


                  
                   
// //                    } catch (error) {
                             
// //                    }
// // })