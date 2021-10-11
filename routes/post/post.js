const router=require("express").Router();

router.post("addPost", (req, res)=>{
    console.log("adding a post");
});

router.post("addThread", (req, res)=>{
    console.log("adding a thread");
});

module.exports=router;