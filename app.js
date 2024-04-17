require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const userRoutes = require("./routes/users-routes")


const app = express()
const PORT = 5000

mongoose.connect("mongodb://localhost:27017/placesDB")
    .then(() => {
        console.log("Connected To DB");
        app.listen(PORT,()=>{
            console.log("Server started on port",PORT)
        })
    })
    .catch(err => {
        console.log("error while connecting to db =>", err);
    })


app.use(userRoutes)
