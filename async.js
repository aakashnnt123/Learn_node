const fs = require("fs");
const https  = require('https');

console.log("Hello world");

var a = 10786943;
var b = 28986;

const data = fs.readFileSync("./file.txt", "utf8");

console.log("Sync data: ",data)

https.get("https://dummyjson.com/products/1" , (res) =>
{
  console.log("fetched data successfully");
});

setTimeout(()=>{
  console.log("setTimeout function called");
},5000);


fs.readFile("./file.txt", "utf8", (err,data)=>{
  if(err)
  {
    console.error("Error Found!")
    return;
  }
  console.log("File data :" ,data);
});

function multiply(x,y)
{
  var d = x * y;
  return d;
}

var result = multiply(a , b);

console.log(result);