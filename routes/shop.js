const express = require("express");
const path = require("path");

const router = express.Router();
const adminData = require("./admin");
const shopController = require("../controllers/shop");


// router.get('/', (req,res,next)=>{
//     // res.send("<h1>Hello</h1>");  
//     console.log(adminData.products); 
//     //res.sendFile(path.join(__dirname,"../","views","shop.html"));
//     res.render("shop",{prods : adminData.products, pageTitle: 'Shop', path: "/"});
// });


router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getProduct);

router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.deleteCartItem);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);



module.exports = router;