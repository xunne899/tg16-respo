const prompt = require('prompt-sync')();

let weight = parseFloat(prompt ("Enter Weight"));
let height = parseFloat(prompt("Enter Height"));
let bmi = weight/ height **2;
console.log("bmi =", bmi);