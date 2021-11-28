const fs = require("fs");
const { request } = require("http");

requestHandler = (req,res) =>{
    if(req.url === "/" && req.method === "GET"){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><body><h1>Good Morning!</h1><a href='/message'>Go To Message</a></body></head>")
        res.write("</html>");
        res.end();
    }
    if(req.url === '/message' && req.method === "GET"){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><body><h1>Message:</h1><form action='/message' method='POST'><input type='text' name='message'/><input type='number' name='Age'/><button type='submit'>Send</button></form></body></head>")
        res.write("</html>");
        res.end();
    }
    if(req.url === '/message' && req.method === "POST"){
        const body = [];
    
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
    
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            // fs.writeFileSync("message.txt",parseBody); // Sync wait for write the whole file
            fs.writeFile("messageNew.txt", parseBody, (err) => {
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            });
            
        
    
        });
        
        
    }
}

module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     message: "Hola Amigo!"
// }

//exports.handler = requestHandler;
//exports.message = "Hola Amigo!";
