const express = require("express");
const path = require("path");

const router = express.Router();
const adminData = require("./admin");

router.get('/', (req,res,next)=>{
    // res.send("<h1>Hello</h1>");  
    console.log(adminData.products); 
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    res.render("shop",{prods : adminData.products, pageTitle: 'Shop', path: "/"});
});

module.exports = router;