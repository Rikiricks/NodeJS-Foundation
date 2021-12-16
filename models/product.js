const products = [];
const fs = require("fs");
const path = require("path");
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
            console.log("parsing");
            const data = JSON.parse(fileContent);
            cb(data);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
            cb([]);
        }
    });
}


module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }




    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
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
}