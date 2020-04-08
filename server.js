const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log(req);
    res.send("Hello World!!!");
})

app.post("/", (req, res)=>{
    console.log(req);
    res.send("POST Hello World!!!");
})

app.listen(9500, (err)=>{
    console.log("Server started successfully.");
})