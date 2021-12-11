const products = [];
const fs = require("fs");
const path = require("path");
const p = path.join(path.dirname(require.main.filename),
        'data',
        'products.json');

const  getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent)=>{
       
        if(err){
            console.log("error: ",err);
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
    constructor(t){
        this.title = t
    }

   

    
    save(){
      
        // const p = path.join(path.dirname(require.main.filename),
        // 'data',
        // 'products.json');
        // console.log(p);

        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{
                console.log(err);
            });
        })
        
           
           // products.push(this);
           
      //  });


    }

    static fetchAll(cb){

       getProductsFromFile(cb);
     
      
    }
}