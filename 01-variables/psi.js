const prompt = require -m('prompt-sync')();

let psi = parseFloat(prompt("enter psi:"))
let quality = 0;
if (psi <= 150){
quality = "Healthy"
}else if (psi <=300){
    quality = "unhealthy";
} else {
    quality = " hazardous";

}
console.log(quality);



