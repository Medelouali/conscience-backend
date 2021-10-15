const router=require("express").Router();
const { addThread }=require("../../queries/queries");


router.post("/addThread", (req, res)=>{
    req["db"].query(
        addThread(req.body.threadName, req.body.threadTree, req.body.threadPic, req.body.threadOwner), (err, result)=>{
            if(err) throw err;
            console.log("Creating a thread...");
        });
});

router.post("/updateThread", (req, res)=>{
    console.log("updating a thread");
});

module.exports=router;