const prompt = require('prompt-sync')();

let ans = prompt ("Do you to continue (y/n):");

// opp is // is &&
// opp of && is //
// opp == is !=

if (ans !="y" && ans!="n") {
    console.log("please enter yes or no")
    ans = prompt ("Do you to continue (y/n):");

}
console.log("enter ans", ans)