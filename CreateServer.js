const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url === "/getsecretData"){
      res.end("No Secret Data Found");
   }
    res.end("Hello World");
})

const PORT = 3000;
server.listen(PORT, () =>{
  console.log(`server run on http://localhost:${PORT}`);
});