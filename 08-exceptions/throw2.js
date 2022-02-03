const prompt = require('prompt-sync')()

function askForName() {
    let name = prompt ("Enter your name");
    if(name == ""){
        throw "User name is empty"
    }
    return name;
}

try{
let userName = askForName();
console.log(userName)
}catch(e){
    console.log("Error !!! You didn't specify your name")
}
console.log("rest of the program")

// throw and catch work hand in hand 