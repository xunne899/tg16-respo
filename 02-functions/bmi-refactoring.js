const prompt = require ('prompt-sync')();

function calBMI(width,height){
    return width/height ** 2 ;
}

function getweight(){
    let weight = parseFloat (prompt("enter weight"))
    return weight
}

function getheight(){
    let height = parseFloat (prompt("enter weight"))
    return height
}

function printBMI(bmi){
    console.log ("your BMI is", bmi);
}
let weight = parseFloat(prompt("enter weight"))
let height = parseFloat(prompt("enter height"))

let bmi = calBMI(width,height);
printBMI(bmi)

