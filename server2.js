const http = require('http');
const fs = require('fs');

const filecontent = fs.readFileSync('index.html', 'utf8', (err, data)=>{
    console.log(err);
    
})

const filecontent1 = fs.readFileSync('contact.html', 'utf8', (err, data)=>{
    console.log(err);
    
})

const server = http.createServer((req, res)=>{


    console.log(req);
    
    if(req.url === '/'){
        res.end(filecontent);
    }
    if(req.url === '/contact'){
        res.end(filecontent1);
    }
    
    

    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(filecontent);

 
    

})


server.listen(8000, ()=>{
    console.log("Server running on 8000");
    
})