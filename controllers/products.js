
// const products = [];
const Product = require("../models/product");


exports.getAddProduct = (req,res,next)=>{
    //res.send("<form action='/admin/product' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form>");
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    // res.sendFile(path.join(rootDir,"views","add-product.html"));
    res.render("add-product", {pageTitle :"Add Product", path: "admin/add-product"})
}

exports.postAddProduct = (req,res,next)=>{
    console.log("title",req.body.title);
    // products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();

    console.log(req.body);
    res.redirect("/");
}

exports.getProducts = (req,res,next)=>{
    // res.send("<h1>Hello</h1>"); 

    //console.log(products);
    Product.fetchAll((products) => {res.render("shop",
    {prods : products,
     pageTitle: 'Shop', path: "/"})});

    
    //res.sendFile(path.join(__dirname,"../","views","shop.html"));
    //res.render("shop",{prods : products, pageTitle: 'Shop', path: "/"});
}