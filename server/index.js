import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import Authrouter from "./src/routes/authRoue.js"

const app= express();
app.use("/auth",Authrouter);

app.get("/",(req,res)=>
{
    res.json({message:"server connected"});
})

const port =process.env.PORT || 5000;

app.listen(port,()=> {
    console.log("server started at ",port);
    connectDB();
})