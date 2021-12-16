const http = require("http");
//const routes = require("./routes");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

app.set("view engine", "ejs"); //define put as templating engine i.e. pug
app.set("views","views");

app.use("/admin",adminRoutes.router);
app.use(shopRoutes);

const productsController = require("./controllers/error");


// app.use('/add-product',(req,res,next)=>{
//     console.log("add-product");
//     res.send("<form action='/product' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form>");
//     //next();
// });


// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect("/");
// });

// app.use('/',(req,res,next)=>{
//     res.send("<h1>Hello</h1>");   
    
// });

// app.use((req,res,next)=>{
//     //res.status(404).sendFile(path.join(__dirname,"views","404.html"));
//     res.status(404).render("404",{pageTitle: "404"})
// })


//  const server = http.createServer(app);
//  server.listen(3000);



app.use(productsController.get404);

app.listen(3000)

