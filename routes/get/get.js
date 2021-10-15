const router=require("express").Router();

router.get("/getPosts", (req, res)=>{
    console.log("adding a post");
});

router.get("/getThreads", (req, res)=>{
    console.log("getting threads");
    console.log(req["db"]);
    req["db"].query("SELECT * FROM students;", (err, result)=>{
        if(err) return res.send(err);
        return res.send(result);
    })
});

module.exports=router;