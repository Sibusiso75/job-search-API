const express = require("express")
const router = express.Router()
// const Article = require("../models/Article")
// const {verifyToken,verifyTokenAndAuthorization,verifyAdmin} = require("./verifyToken")


//CREATE - POST request
// router.post("/addArticle",verifyTokenAndAuthorization, async (req, res)=>{
//     try {
// const userExists = await User.findOne({id:req.user._id})
// if(userExists){
// const {title,level, description,province,url,area}=req.body;
//         const newArticles = new Article({
//           userId:userExists._id,name:userExists._name, title, level, description,province, url, area
//         })
//         await newArticles.save()
//         return res.json({status:true, message:"Article has been added successfully"})
//}
//       
//     } catch (error) {
//         console.log(error)
//     }
// })


// //READ - GET request
// router.get("/articles",verifyTokenAndAuthorization, async (req, res)=>{
//     try {
//     
//          const articles = await Article.find()
//          return res.json(articles)
//     } catch (error) {
//        return console.log(error)
//     }
// })
//
//})
//
// //UPDATE - PUT REQUEST
// router.put("/edit/:id",verifyTokenAndAuthorization, async(req, res)=>{
//     try {
//         const {title,level, description,province,url,area}=req.body;
//         const {id}= req.params.id;
//         await Article.findByIdAndUpdate({_id:id}, {title,level, description,province,url,area})
//         return res.json({status:true, message:"Article post has been updated"})
//     } catch (error) {
//         return res.json(error)
//     }
// })

// //DELETE - DELETE REQUEST
// router.delete("/:id",verifyTokenAndAuthorization async (req, res)=>{
//     const id = req.params.id;
//     await Article.findByIdAndDelete(id)
//     return res.json({status:true,message:"Article has been removed"})
// })


router.get("/articles", (request, response)=>{
  response.status(200).json([{id:1,
    post:"I love React JS",
    name:"Sibusiso Matebese",
    userId:1,
    likes:[{userId:1,username:"Sibusiso Matebese"},{username:"Siyasanga Dobela"},{userId:4,username:"Nwabisa Mbunge"},{userId:2,username:"Sthera"},{userId:5,username:"Bulelwa Cakwebe"},{userId:7,username:"Phumelela Platjies"}],
    comments:[{id:20,username:"Siyasanga Dobela",comment:"What's that, Sbu?",replies:[{userId:1,username:"Sibusiso Matebese", reply:"It's a JavaScript library that is used to design user interfacs."}, {username:"Siyasanga Dobela", reply:"Oh okay"},{username:"Sthera Tini", reply:"I'm currently learning React, Sbu. Do you know the difference between State and Props in React?"}, {username:"Sibusiso Matebese", reply:"Yes, I do. State is an internal data that can be changed over time, while props are external data that can be passed to a component and cannot be changed"}]}],
    authorEmail:"sibusisomatebese75@gmail.com", 
    posted:"13 July 2024", title:"How to write a resume"},
    
{id:2,
  post:"What are controlled components in React?",
  name:"Sthera Tini",
  authorEmail:"stheratini@gmail.com", 
  likes:[{username:"Sibusiso Matebese"},{userId:2,username:"Sthera Tini"}],
  comments:[{id:30,username:"Sibusiso Matebese",comment:"Controlled components are components where the form data in controlled by the state of react application", replies:[{userId:1,username:"Sthera Tini", reply:"Thanks, my friend."},{username:"Sibusiso Matebese", reply:"Sure"}]}],
  posted:"14 July 2024", title:"How to be a better Software Developer",
},
{id:3,
  userId:4,
  post:"Top 10 of React questions. 1. What is React JS?2. Explain JSX 3. What is the virtual DOM4. What are significance of keys in React?5. Explain the difference between props and state 6. What are React hooks? 7. Explain the concept of useContext 8. What is Redux, and why it is used? 9. What are advantages of using React? 10. What are controlled components?",
  name:"Sibusiso Matebese",
  authorEmail:"sibusisomatebese75@gmail.com", 
  
  likes:[{userId:1,username:"Sibusiso Matebese"},{userId:6,username:"Siyasanga Dobela"}],
  comments:[{id:40,username:"Nwabisa Mbunge",comment:"Great!", replies:[{userId:4,username:"Sibusiso Matebese", reply:"Sure"}]}],

  posted:"15 July 2024", title:"How to be a better Software Developer",
},
{id:4,
  post:"Artificial Intelligent",
  name:"Nwabisa Mbunge",
  userId:4,

  authorEmail:"nwabisambunge@gmail.com", 
  
  likes:[{userId:1,username:"Sibusiso Matebese"},{userId:6,username:"Siyasanga Dobela"},{userId:4,username:"Nwabisa Mbunge"}],
  comments:[{id:50,username:"Sibusiso Matebese",comment:"Great advice", replies:[{userId:4,username:"Nwabisa Mbunge", reply:"Enkosi mntase"}]}],

  posted:"15 July 2024", title:"How to be a better Software Developer",
},
{id:5,
  userId:1,

  post:`HTML - Hypertext markuup language
        .CSS - Cascading style sheet
        .JavaScript is a scripting language that is used to make website to be more interactive
        .React is JavaScript library that is used to design user interfaces
        .JSX is an extension syntax in React JS that allows a developer to write HTML inside of JavaScript
        Virtual DOM is the copy of the real DOM in memory but it improves React by only updating that are changed in React application
       

      
   `,
  name:"Sibusiso Matebese",
  authorEmail:"sibusisomatebese75@gmail.com", 
  
  likes:[{userId:1,username:"Sibusiso Matebese"},{userId:6,username:"Siyasanga Dobela"},{userId:4,username:"Nwabisa Mbunge"},{userId:2,username:"Sthera"},{userId:5,username:"Bulelwa Cakwebe"},{userId:7,username:"Phumelela Platjies"}],
  comments:[{id:60,username:"Nwabisa Mbunge",comment:"Great info. Thanks for sharing", replies:[{userId:1,username:"Sibusiso Matebese", reply:"Okay sure 👍"}]}],

  posted:"15 July 2024", title:"How to be a better Software Developer",
},
{id:13,
  post:"I love React",
  userId:1,

  name:"Sibusiso Matebese",
  authorEmail:"sibusisomatebese75@gmail.com", 
  
  likes:[{userId:1,username:"Sibusiso Matebese"},{username:"Sthera Tini"},{userId:4,username:"Nwabisa Mbunge"},{userId:2,username:"Sthera Tini"},{userId:5,username:"Bulelwa Cakwebe"},{userId:8,username:"Lukhanyo Hendricks"},{userId:7,username:"Phumelela Platjies"}, {userId:3,username:"Cindy Baba"}
],
  comments:[{id:10,username:"Nwabisa Mbunge",comment:"Nice post", replies:[{userId:1,username:"Sibusiso Matebese", reply:"Enkosi mntase"}]}],

  posted:"15 July 2024", title:"How to be a better Software Developer",
},
])
})
  module.exports =router