function calculateWithGst(bill, gstPercentage=0.07){
    let gst = bill* gstPercentage;
    let total = bill + gst ;
    return total;
}

let bill = parseFloat(prompt("Please enter the bill"));
let total = calculateWithGst(bill,0.07) ;
let total = calculateWithGst(bill);
let totalinSydney = calculateWithGst(bill,0.1);
let totalinPhilip = calculateWithGst(bill,gstPercentage=0.12);
console.log("Total =",total);
console.log("Total in Syn =",totalinSydney);
console.log("Total in Phi=",totalinPhilip);