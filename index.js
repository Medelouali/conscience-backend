const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");
const db=require("./dbSetUp/setUp");
const dotenv=require("dotenv");
dotenv.config();

//routes;
const posts=require("./routes/post/post");
const gets=require("./routes/get/get");
app.use(cors());
app.use(express.json());

const database=db();

app.use("/post", (req, res, next)=>{
    req["db"]=database;
    next();
}, posts);

app.use("/get", (req, res, next)=>{
    req["db"]=database;
    next();
}, gets);

app.get("/", (req, res)=>{
    res.send("Conscience is live");
})

app.listen(process.env.PORT || 2000, ()=>{
    console.log("Server is up and running");
})
