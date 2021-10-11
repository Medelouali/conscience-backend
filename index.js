const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());
//
const connection = mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11443728",
    password: "yTvpuRURlj"
  });
  
connection.connect(function(err) {
    const sql=`CREATE TABLE posts( postId INT);`;
    if (err) throw err;
    console.log("Connected to db!");
    connection.query("USE sql11443728;", (err, results)=>{
        if(err)throw err;
        console.log("selecting db");
    })
    connection.query(sql, (err, results)=>{
        if(err)throw err;
        console.log(results);
    })
});

app.get("/", (req, res)=>{
    res.send("Conscience is live");
})

app.listen(2000, ()=>{
    console.log("Server is up and running");
})
