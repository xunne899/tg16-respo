const pi = 22/7;

// const prompt = require('prompt-sync')();


// function calareacircle(radius){
//     return pi* radius **2;
// }

// // when importing dont put ./ in front
// // let r = parsefloat(prompt())

// // let area = calareacircle(r)
// // console.log(area);module.export

// import = {pi,calareacircle};

const pi = 22/7;
function calculateAreaOfCircle(radius) {
    return pi * radius ** 2;
}

// indicate what we want to export
module.exports = { pi, calculateAreaOfCircle}