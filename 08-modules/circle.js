// const pi = 22/7;

// const prompt = require('prompt-sync')();
// // dont put ./ in front
// //node.js will look for in node_modules directory
// function calareacircle(radius){
//     return pi* radius **2;
// }

// const {pi,calareacircle}
// let r = parsefloat(prompt())

// let area = calareacircle(r)
// console.log(area);

// module.exports = {pi,calareacircle};



// when we importing from 
// a module that we install via
// yarn add, don't put ./ in front
const prompt = require('prompt-sync')();

// when we importing from our own
// files, we need to give a relative url
// so if it's the same directory,
// we need to have './' in front
const { pi, calculateAreaOfCircle} = require('./math.js');
console.log("pi =", pi);
let r = parseFloat(prompt("Please enter a radius: "));
let area = calculateAreaOfCircle(r);
console.log("Area =", area);