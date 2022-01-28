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

console.log(formletter);

let fruits ="bananas" ;
console.log("fruits[1]", fruits[1])

let number =[1,3,5,7,9];
numbers[0] =-99
console.log(numbers);

fruits[0] = 'z'; // strings are immutable, means cannot change individuals in string via index

console.log(fruits);

