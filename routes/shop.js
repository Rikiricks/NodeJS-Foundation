const express = require("express");
const path = require("path");

const router = express.Router();
const adminData = require("./admin");
const productsController = require("../controllers/products");


// router.get('/', (req,res,next)=>{
//     // res.send("<h1>Hello</h1>");  
//     console.log(adminData.products); 
//     //res.sendFile(path.join(__dirname,"../","views","shop.html"));
//     res.render("shop",{prods : adminData.products, pageTitle: 'Shop', path: "/"});
// });


router.get('/', productsController.getProducts);

module.exports = router;