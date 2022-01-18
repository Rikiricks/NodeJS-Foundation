const products = [];
const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const Cart = require("./cart");
const p = path.join(path.dirname(require.main.filename),
    'data',
    'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {

        if (err) {
            console.log("error: ", err);
            cb([]);
        }
        try {
           
            const data = JSON.parse(fileContent);
            cb(data);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
            cb([]);
        }
    });
}


module.exports = class Product {
    constructor(id,title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }




    save() {
      
        getProductsFromFile(products => {
           
            if(this.id){
                const index = products.findIndex(a=>a.id === this.id);
                const updatedPrdocut = [...products];
                updatedPrdocut[index] = this;
                fs.writeFile(p,JSON.stringify(updatedPrdocut), (err)=>{
                    console.log(err);
                });
            }
            else{
                this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        }
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id,cb){
        getProductsFromFile(products=>{
            const product = products.find(a=>a.id == id);
            
            cb(product);
        })
    }

    static deleteById(id){
        getProductsFromFile(products=>{
            const product = products.find(a=>a.id === id);
            const newProducts = products.filter(a=>a.id !== id);
            fs.writeFile(p, JSON.stringify(newProducts),err=>{
                if(!err){
                    Cart.deleteProduct(id, product.price);
                };
            })
        })
    }

    
    
}