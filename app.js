const http = require('http');
const url = require('url')
const fs = require('fs')


// npm i mime-types
// Ele serve para automaticamente identificar o tipo de arquivo vai carregar
const lookup = require('mime-types').lookup;


const server = http.createServer((req,res)=>{
    // Recebendo a request e enviando o arquivo static
    // from a folder called 'public'

    let parseURL=url.parse(req.url,true);
    // Remover the os caminhos e o slashes

    let path = parseURL.path.replace(/^\/+|\/+$/g,"");
    // /index.html
    // /main.css
    // /main.js
    
    if (path ===""){
        path= "index.html";
    }
    console.log(`Requested path ${path}`);

    let file= __dirname + "/src/public/" + path;

    fs.readFile(file,(err,content)=>{
        if(err){
            console.log('File not found: ' + file);
            res.writeHead(404);
            res.end();
        }else{
            // Especificando o tipo de conteudo 
            console.log('returning'+path)
            res.setHeader("X-Content-Type-Options", "nosniff");
            let mime= lookup(path)
            res.writeHead(200,{'Content-Type':mime})
            // Sem o mimeTypes
            // switch(path){
            //     case 'main.css':
            //         res.writeHead(200,{'Content-type':"text/css"})
            //         break;
            //     case 'main.js':
            //         res.writeHead(200,{'Content-type':"application/javascript"})
            //         break;
            //     case 'index.html':
            //         res.writeHead(200,{'Content-type':"text/html"})
                
            // }
            res.end(content);
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000');
})