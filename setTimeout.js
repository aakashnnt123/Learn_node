console.log("hello world!");

var a = 10786943;
var b = 28986;

// this callback function will only be pushed to call stack in v8 oncethe call stack is empty.
setTimeout(()=>{
  console.log("call me after 0 seconds");
},0)

// Trust issues with setTimeout..setTimeout function with 0 milisecond execued only after call satck empty not immediate..

setTimeout(()=>{
  console.log("call me after 3 seconds");
},3000)

function multiply(x,y)
{
  var d = x * y;
  return d;
}

var result = multiply(a , b);

console.log(result);