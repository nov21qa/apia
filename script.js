const http = require('http');
const fs=require("fs");
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,`utf-8`);
const overview = fs.readFileSync(`${__dirname}/index.html`,'utf-8');
const product=fs.readFileSync(`${__dirname}/product.html`,'utf-8');
const card=fs.readFileSync(`${__dirname}/card.html`,'utf-8');
const dataToJSON = JSON.parse(data);

const server = http.createServer(function(request,response)
{
    const path = request.url;
    if(path=="/")
        
    {
        response.writeHead(200,
            {
                "Content-type":"text/html"
            });
     
        response.end("<h1>home</h1>");
    }
        else if(path=="/api")
        {
            response.writeHead(200,
                {
                    "Content-type":"application/json",
                })
            response.end(data);
        }
    else
        response.end("rest pages");
    
        
})

//launching pad
server.listen(4000,'127.0.0.1',function()
{
    console.log("Server is handling requests...!");
})
