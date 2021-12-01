const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/', (req,res,next)=>{
    // res.send("<h1>Hello</h1>");   
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
});

module.exports = router;