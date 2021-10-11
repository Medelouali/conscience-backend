const mysql=require("mysql");

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
            console.log("selecting db");
        })
        
    });
    return connection;
};

module.exports=hookUp;