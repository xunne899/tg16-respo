console.log("3||4 =>", 3 || 4);
console.log("0||4 =>", 0 || 4);

const prompt = require ('prompt-sync')();

let name = Number (prompt("Enter name:"))
// name = name || "N/A";
// name "" || "N/A"
// name = "N/A"

console.log("1 && 2 =>", 1 &&2 )

// if the user enters "ahkows" for name
// name = "ahkow " || "N/A"
// name = "ah kow "