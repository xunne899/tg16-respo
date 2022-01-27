let totalAmountLeft = 35;
let distanceTravelled = 0;

while (totalAmountLeft >= 0 ){
    if(distanceTravelled < 10000){
    totalAmountLeft = totalAmountLeft - 3.5;
    distanceTravelled += 500;

} else {  
     totalAmountLeft = totalAmountLeft - 3.5;
    distanceTravelled += 400;


    }
}

console.log(distanceTravelled);