const express = require("express");
const Job = require("../models/JobSeeker/Job/Job");
const { verifyTokenAndAuthorization } = require("./verifyToken");
const SavedJob = require("../models/JobSeeker/Job/SavedJob");
const router = express.Router()
// const Job = require("../models/Job")
// const Save = require('../models/SavedJob')
// const {verifyToken,verifyTokenAndAuthorization,verifyAdmin} = require("./verifyToken")


//CREATE - POST request
// router.post("/addJob",verifyTokenAndAuthorization, async (req, res)=>{
//     try {
//         const {title,level, description,province,url,area}=req.body;
//         const newJobs = new Job({
//           title, level, description,province, url, area
//         })
//         await newJobs.save()
//         return res.json({status:true, message:"Job has been added successfully"})
//     } catch (error) {
//         console.log(error)
//     }
// })

// //READ - GET request
// router.get("/jobs",verifyTokenAndAuthorization, async (req, res)=>{
//     try {
  // const jobs = []
  //       if(req.user.jobPreference==""){
  //        jobs = await Job.find().sort({createdAt:"desc"})
  //       }
  //       else if(req.user.jobPreference!==""){
  //         jobs = await Job.find().sort({createdAt:"desc", jobPreference:req.user.jobPreference})
  //       }
  //        return res.json(jobs)
//     } catch (error) {
//        return console.log(error)
//     }
// })

// //UPDATE - PUT REQUEST
// router.put("/edit/:id",verifyTokenAndAuthorization, async(req, res)=>{
//     try {
//         const {title,level, description,province,url,area}=req.body;
//         const {id}= req.params.id;
    /* 
     
    */
//         await Job.findByIdAndUpdate({_id:id}, {title,level, description,province,url,area})
//         return res.json({status:true, message:"Job post has been updated"})
//     } catch (error) {
//         return res.json(error)
//     }
// })

// //DELETE - DELETE REQUEST
// router.delete("/deleteJob",verifyTokenAndAuthorization, async (req, res)=>{
//     const id = req.params.id;
//     await Job.findByIdAndDelete(id)
//     return res.json({status:true,message:"Job has been removed"})
// })

// router.post("/save-job",verifyTokenAndAuthorization, async (req, res)=>{
//     try {
        
//         const {title,level, description,province,area}=req.body;
        
//         const saveJob = new Save({
//             title,level, description,province,area
//         })
//         await saveJob.save()
//         return res.json({status:true,message:"Job has been saved"})
//     } catch (error) {
//         console.log(error)
//     }

// })
// router.delete("/deleteSavedJob",verifyTokenAndAuthorization, async (req,res)=>{
//     try {
//         const id = req.params.id;
//         await Save.findByIdAndDelete(id)
//         return res.json({status:true,message:"Job has been unsaved"})
//     } catch (error) {
//         console.log(error)
//     }
// })
const PAGE_SIZE =3;
router.get("/jobs/search", verifyTokenAndAuthorization, async (req,res)=>{
  const {query}= req;
const pageSize = query.pageSize || PAGE_SIZE
const page = query.page || 1;
const category = query.category || ""
const salary = query.salary || ""
const order = query.order || ""
const searchQuery = query.query || ""

const queryFilter = searchQuery && searchQuery!=="all"?
{
title:{$regex:searchQuery, $options:'i'}
}:{}
const categoryFilter = category && category!=="all"?
{category}:{}
const salaryFilter = salary && salary!=="all"?
{
  salary:{
    $gte:Number(salary.slit("-")[0]),
    $lte:Number(salary.slit("-")[1])
  }
  
}:{}
const sortOrder = order=="featured"?{featured:-1}
:order=="lowest"?{salary:1}:
order=="highest"?{salary:-1}:
order=="newest"?{createdAt:-1}:{_id:-1}

const jobs = await Job.find({
  ...queryFilter,
  ...categoryFilter, 
  ...salaryFilter
}).sort(sortOrder).skip(pageSize*(page-1)).limit(pageSize)

const countJobs = await Job.countDocuments({
  ...queryFilter,
  ...categoryFilter, 
  ...salaryFilter
})
res.send({jobs,
  countJobs,
  page,
  pages:Math.ceil(countJobs/pageSize)
})
})
router.get('/jobs/categories',async (req, res) => {
    const categories = await Job.find().distinct('category');
    res.send(categories);
  })



  router.post("/save-job",verifyTokenAndAuthorization, async (req, res)=>{
    
     const {description, category, url,salary,  user} = req.body;

     const newJobs = new SavedJob({
      saveJobs: req.body.saveJobs.map((x) => ({ ...x, job: x._id })),
      description, 
      category, 
      url,salary, 
      user: req.user._id,

     })
     await newJobs.save()
     return res.json({status:true,message:"Job has been saved"})
  })
  router.get("/jobs", (request, response)=>{
    const jobTypes =["Full time", "Part time", "Contract", "Temporary", "Internship", "Learnership"]
  response.status(200).json([{id:1, title:"Frontend developer", description:"We are big tech company based in Cape Town. We are looking for talented Frontend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue.",
  level:"Entry",numberOfPeopleToHire:1,
  EmployeesResideInJoblocation:"Yes",
  jobType:jobTypes[1],
  locationThatBestDescriptionsTheJob:"In-person. Precise location",
    posted:"13 June 2024", url:"https://www.indeed.com",province:"Gauteng",area:"Sandton, Johannesburg"}
  , {id:2, title:"Backend developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue. Must be proficient in backend languages such as C#, JavaScript and as well as their frameworks. Must have experience git.",
  level:"Mid-level",numberOfPeopleToHire:1,
  EmployeesResideInJoblocation:"No",
  jobType:jobTypes[3],
  locationThatBestDescriptionsTheJob:"Hybrid. The job combines working in office and remotely",
  numberOfPeopleToHire:1,
  posted:"14 June 2024",url:"https://www.linkedincom",province:"Eastern Cape",area:"Port Elizabeth"}, 
  {id:3, title:"Fullstack developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue. Must be proficient in backend languages such as C#, JavaScript and as well as their frameworks. Must have experience git.", 
  posted:"15 June 2024",
  jobType:jobTypes[1],

  EmployeesResideInJoblocation:"No",
  locationThatBestDescriptionsTheJob:"Remote. The job is performed remotely",
  url:"https://www.indeed.com",province:"Western Cape",area:"Cape Town"},
  {id:4, title:"Backend developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue. Must be proficient in backend languages such as C#, JavaScript and as well as their frameworks. Must have experience git.", 
  level:"Mid-level",  numberOfPeopleToHire:1,
  EmployeesResideInJoblocation:"No",
  jobType:jobTypes[3],

  locationThatBestDescriptionsTheJob:"Remote. The job is performed remotely",
  posted:"15 June 2024",province:"Gauteng",area:"Sandton, Johannesburg"}, 
  {id:5, title:"Fullstack developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team.",
  level:"Mid-level",EmployeesResideInJoblocation:"No", 
  numberOfPeopleToHire:2,  jobType:jobTypes[4],
  locationThatBestDescriptionsTheJob:"Hybrid. The job combines working in office and remotely",
  posted:"16 June 2024",url:"https://www.indeed.com",province:"Gauteng",area:"Sandton, Johannesburg"},
  ])
  })
  router.get("/savedJobs", (request, response)=>{
    const jobTypes =["Full time", "Part time", "Contract", "Temporary", "Internship", "Learnership"]
  response.status(200).json([{id:1, title:"Frontend developer", description:"We are big tech company based in Cape Town. We are looking for talented Frontend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue.",
  level:"Entry",numberOfPeopleToHire:1,
  EmployeesResideInJoblocation:"Yes",
  jobType:jobTypes[1],
  locationThatBestDescriptionsTheJob:"In-person. Precise location",
    posted:"13 June 2024", url:"https://www.indeed.com",province:"Gauteng",area:"Sandton, Johannesburg"}
  , {id:2, title:"Backend developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team. Must be proficient in HTML, CSS, JavaScript, and frameworks such as React, Angular and Vue. Must be proficient in backend languages such as C#, JavaScript and as well as their frameworks. Must have experience git.",
  level:"Mid-level",numberOfPeopleToHire:1,
  EmployeesResideInJoblocation:"No",
  jobType:jobTypes[3],
  locationThatBestDescriptionsTheJob:"Hybrid. The job combines working in office and remotely",
  numberOfPeopleToHire:1,
  posted:"14 June 2024",url:"https://www.linkedincom",province:"Eastern Cape",area:"Port Elizabeth"}, 
   
  {id:5, title:"Fullstack developer", description:"Big tech company based in Johannesburg. Our client is looking for talented Backend developer to join our team.",
  level:"Mid-level",EmployeesResideInJoblocation:"No", 
  numberOfPeopleToHire:2,  jobType:jobTypes[4],
  locationThatBestDescriptionsTheJob:"Hybrid. The job combines working in office and remotely",
  posted:"16 June 2024",url:"https://www.indeed.com",province:"Gauteng",area:"Sandton, Johannesburg"},
  ])
  })


  module.exports =router