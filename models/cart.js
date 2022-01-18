const fs = require("fs");

const path = require("path");
const { products } = require("../routes/admin");
const p = path.join(path.dirname(require.main.filename),'data','cart.json');

module.exports = class Cart{
    constructor(){}

    static addProduct(id, price){
        fs.readFile(p,(err, fileContent)=>{
            let cart = { products: [], totoalPrice: 0};
            if(!err){
               cart = JSON.parse(fileContent);
            }
            const existProductIndex = cart.products.findIndex(a=>a.id == id);
            const existProduct = cart.products[existProductIndex];
            let updatedProduct;
            if(existProduct){
                updatedProduct = {...existProduct};
                updatedProduct.qty = updatedProduct.qty+1;
                cart.products = [...cart.products];
                cart.products[existProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id:id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totoalPrice = cart.totoalPrice + +price;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        })
    }

    static deleteProduct(id,price){
     fs.readFile(p,(err,fileContent)=>{
         if(err){
             return;
         }
         const updatedCart = {...JSON.parse(fileContent)};
         const product = updatedCart.products.find(a=>a.id === id);
         const pQty = product.qty;
         updatedCart.products = updatedCart.products.filter(a=>a.id !== id);
         updatedCart.totoalPrice = updatedCart.totoalPrice - pQty * price;

         fs.writeFile(p, JSON.stringify(updatedCart), err => {
             console.log(err);
         });

     })
    }

    static getCart(cb){
        fs.readFile(p,(err,fileContent)=>{
            const cart = JSON.parse(fileContent);
            if(err){
                cb(null)
            }
            else{
            cb(cart);
            }
        })
    }
}