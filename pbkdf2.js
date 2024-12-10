const crypto = require('node:crypto');

console.log("hello world");

var a = 10786943;
var b = 28986;



const key=crypto.pbkdf2Sync("password" , "salt" , 500000 , 50, "sha512");

console.log(key);

// pbkdf-> Password Base Key Deravtive Function...
crypto.pbkdf2("password" , "salt" , 500000 , 50, "sha512", (err,key)=>{
  console.log("Key is Generated");
})

function multiply(x,y)
{
 
  var d = x * y;
   return d;
}

var result = multiply(a , b);

console.log(result);