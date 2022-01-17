const Product = require("../models/product");
const Cart = require("../models/cart");


exports.getIndex = (req,res,next)=>{
    Product.fetchAll((products) => {res.render("shop/index",
    {prods : products,
     pageTitle: 'Shop', path: "/"})});
}


exports.getProducts = (req,res,next)=>{
    // res.send("<h1>Hello</h1>"); 

    //console.log(products);
    Product.fetchAll((products) => {res.render("shop/product-list",
    {prods : products,
     pageTitle: 'All Products', path: "/products"})});

    
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    //res.render("shop",{prods : products, pageTitle: 'Shop', path: "/"});
}

exports.getProduct = (req, res, next)=>{

    const id = req.params.id;
   
    Product.findById(id,data =>{
    const {id, title, imageUrl, price} = data;
    res.render("shop/product-detail",{pageTitle: "Product Detail", product: data,path:"/products"})

        
    });
}

exports.getCart = (req,res,next) => {
    res.render("shop/cart",{pageTitle: "Your Cart", path:"/cart"});
}

exports.postCart = (req, res, next) =>{
    const productId = req.body.productId;
    console.log(productId);
    Product.findById(productId, (product) =>{
       
        Cart.addProduct(productId,product.price);
    })
    res.redirect("/cart");
}

exports.getCheckout = (req,res,next) => {
    res.render("shop/checkout",{pageTitle: "Checkout", path:"/checkout"});
}

exports.getOrders = (req,res,next) => {
    res.render("shop/orders",{pageTitle: "Orders", path:"/orders"});
}