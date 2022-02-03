
const prompt = require('prompt-sync')();



// if ("lamb"){
//     console.log("mary has a little lamb");

// }


// if (["a", "b","c"]) {
//     console.log("there is an array");
// }

let bill = Number(prompt("please enter amt :"))

if (bill){
let gst = bill *0.07;
console.log(gst)
}