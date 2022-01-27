//  let password = "rotiprata123"
//  if (password === "rotiprata123"){
//      console.log("Login successful!");
//  }else {
//      console.log ("Wrong Password");
//  }

//  let score = B1
//  if (score >= 90){
//      console.log("Distinction");
//  } else if (score >=80){
//      console.log("A");
//  } else if (score >=70){
//     console.log("B");
// } else if (score >=60){
//     console.log("C");
// } else if (score >=50){
//     console.log("D");
// } else {
//     console.log("F");
// }



// if (score >= 90){
//     console.log("AD");
// }
// if (score)



// let x =42;
// if (x >10){
//     console.log("Do something")
// }
// if (x>20){
//     console.log("Do nothing")
// }
// // warning ! wont work
// if (x=43){
//     console.log("Secret of life is found")
// } else {
//     console.log("Sorry not found")
// }

const prompt = require('prompt-sync')();
let x = Number (prompt ("integer no "));

if (x % 2 == 0){
    console.log("Even");
}
 else {
    console.log("Odd");
}