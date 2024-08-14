
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
const {cartItems} = require("./Products")


app.use(cors())
app.use(express.json())
app.get("/", (request, response)=>{
  response.status(200).send("Hello world from the server")
})
app.get("/products", (request, response)=>{
  response.json(cartItems)
})

app.all("*", (request, response)=>{
  response.status(404).send("404 - Page not found")
})
app.listen(5000, ()=>{
  console.log("Listening to port 5000")
})

