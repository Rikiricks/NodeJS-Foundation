const fs = require("fs");

const path = require("path");
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
}