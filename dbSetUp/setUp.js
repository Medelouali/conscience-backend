const mysql=require("mysql");
const { createUser, createThread } = require("../queries/queries");

const hookUp=()=>{
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD
      });
      
    connection.connect((err, results)=>{
        if (err) throw err;
        console.log("Connected to db!");
        connection.query("USE sql11443728;", (err, results)=>{
            if(err)throw err;
        });

        // connection.query(createUser, (err, result)=>{
        //     if(err) throw err;
        // });
        // connection.query(createThread, (err, result)=>{
        //     if(err) throw err;
        // });

    });
    return connection;
};

module.exports=hookUp;