// back tick string can have line and spacing 

let letter = `Dear sir, 

your bill of 500.0 is overdue on 31/ 01 2022 "customer is always right"`;

console.log(letter)


let firstname = "james";
let lastname = "smith";
let bill = 200;

let formletter = `
Dear ${firstname} ${lastname},
your bill of ${bill}, which will ${bill*0.1}`;

console.log(formletter)

