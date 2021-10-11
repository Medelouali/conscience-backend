const router=require("express").Router();

router.get("getPosts", (req, res)=>{
    console.log("adding a post");
});

router.get("getThreads", (req, res)=>{
    console.log("getting threads");
});

module.exports=router;