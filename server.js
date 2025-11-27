const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res)=>{

    try {
        res.statusCode = 200;

        // res.write("Server running.....");
        // res.end();

        res.end("Server running................same")
        
    } catch (error) {
         res.statusCode = 403;
    }

   

})

server.listen(9000, ()=>{
    console.log("Server running on port 9000");
    
});