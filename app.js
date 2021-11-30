const http = require("http");
//const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/add-product',(req,res,next)=>{
    console.log("add-product");
    res.send("<form action='/product' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form>");
    //next();
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});


app.use('/',(req,res,next)=>{
    res.send("<h1>Hello</h1>");   
    
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)

