const router=require("express").Router();
const { addThread, updateTable }=require("../../queries/queries");


router.post("/addThread", (req, res)=>{
    req["db"].query(
        addThread(req.body.threadName, req.body.threadTree, req.body.threadPic, req.body.threadOwner), (err, result)=>{
            if(err) throw err;
            console.log("Creating a thread...");
            return res.send(result);
        });
});

router.post("/updateThread/:threadName/:newTree", (req, res)=>{
    const {threadName, newTree}=req.params;
    req["db"].query(updateTable("thread", "threadTree", newTree, "threadName", threadName), (err, result)=>{
            if(err) throw err;
            console.log("updating the thread...");
            return res.send(result);
        });
});

module.exports=router;