// const express = require("express")
// const router = express.Router()
// const Post = require("../models/JobSeeker/Post");
// const { verifyTokenAndAuthorization } = require("../verifyToken");


// router.post("/addPost", async (req, res)=>{
// try {
//  const {post} = req.body;
 
// const foundUser = await User.findOne({id:req.user._id})
// if(!foundUser){
//           return res.json({message:"User not found"})
// }
// const newPost = new Post({post, 
// userId:foundUser._id,username:foundUser.username,
// })
// await newPost.save()
// return res.json({status:true,message:"Post has been added"})

// } catch (error) {
//           return res.json(error)
          
// }
// })
// router.put("/editPost/:id", verifyTokenAndAuthorization, async (req, res)=>{
//           const id = req.params.id;
//           const { post} =req.body;
//           const foundUser = await User.findOne({id:req.user._id})
//           const foundPost = await Post.findOne({_id:id})

//           if(!foundUser){
//                     return res.json({message:"User not found"})
//           }
//           if(!foundPost){
//                     return res.json({message:"Post not found"})

//           }
//           await Post.findByIdAndUpdate({_id:id},{post})
// })
// router.delete("/deletePost/:id",verifyTokenAndAuthorization, async (req, res)=>{
//           const id =req.params.id;
//           const foundUser = await User.findOne({id:req.user._id})
//           if(!foundUser){
//                     return res.json({message:"User not found"})
//           }
//           if(!foundPost){
//                     return res.json({message:"Post not found"})
//           }
//           await Post.findByIdAndDelete({_id:id})
//     return res.json({status:true, message:"Post has been removed"})
// })
// router.get("/allPosts", async (req, res)=>{
//           await Post.find().sort({createdAt:"desc"})
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