const express=require("express");
const app=express();
const PORT=3001;

app.get("/",(req,res)=>{
    res.send("Hello World!! My first project on JS");
});

app.listen(PORT,()=>{
    console.log("Server is running...");
});