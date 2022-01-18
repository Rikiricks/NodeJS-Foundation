const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const adminController = require("../controllers/admin");
const router = express.Router();

const products = [];



// router.get('/add-product',(req,res,next)=>{
//     //res.send("<form action='/admin/product' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form>");
//     //res.sendFile(path.join(__dirname,"../","views","shop.html"));
//     // res.sendFile(path.join(rootDir,"views","add-product.html"));
//     res.render("add-product", {pageTitle :"Add Product", path: "admin/add-product"})
// });

router.get('/add-product',adminController.getAddProduct);

// router.post('/add-product',(req,res,next)=>{
//     products.push({title: req.body.title});
//     console.log(req.body);
//     res.redirect("/");
// });

router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);
router.get('/products', adminController.getProducts);
router.post("/delete-product", adminController.deleteProduct)
//module.exports = router;
exports.router = router;
exports.products = products;