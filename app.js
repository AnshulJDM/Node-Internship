const express = require("express") 
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors()) 
app.use(express.json()) 


const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)


const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)


mongoose.connect("mongodb://localhost:27017/25_node_internship").then(()=>{
    console.log("database connected....")
})

const PORT = 3100
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})
