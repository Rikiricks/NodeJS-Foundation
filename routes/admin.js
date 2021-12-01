const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    //res.send("<form action='/admin/product' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form>");
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    res.sendFile(path.join(rootDir,"views","shop.html"));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;