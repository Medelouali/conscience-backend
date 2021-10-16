const router=require("express").Router();

router.get("/getThreads", (req, res)=>{
    req["db"].query("SELECT * FROM thread LIMIT 1, 20;", (err, result)=>{
        if(err) return res.send(err);
        return res.send(result);
    });
});

router.get("/getOneThread/:threadName", (req, res)=>{
    req["db"].query(`SELECT * FROM thread WHERE threadName="${req.params["threadName"]}";`, (err, result)=>{
        if(err) return res.send(err);
        return res.send(result);
    });
});

router.get("/getThreadNames", (req, res)=>{
    req["db"].query("SELECT threadName FROM thread;", (err, result)=>{
        if(err) return res.send(err);
        return res.send(result);
    });
});
module.exports=router;