const prompt = require ('prompt-syn')();



let users = ["john ", 'mary' , 'abel', 'betty']


let bill = prompt("please enter the amt:");
let gst = bill && parseFloat(bill) * 0.07;
console.log("gst=",gst);