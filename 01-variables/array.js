let fruits = []; // empty array
let numbers = new Array();
let allZeros = new Array(10);
console.log("allZeroes=",allZeroes);

let food = ["chicken rice","duck rice","orange juice"]
console.log ("food[1] =>", food[1])
//reassign to index 2 of the array "food"

food[2] = 'papaya juice';
console.log("food=", food);

food =["ramen","udon","raw fish"];
console.log("after reassigning food=", food);

let complex = [1,2,3,['A' , 'B',]['Alpha', 'Beta'], 'c']];
console.log(complex[3][2][0]);

//arrays are reference values
let b1 = ["A" , "B", "C", "D"]
b2 = b1;
b1[0] = -99;
console.log("b2=", b2)