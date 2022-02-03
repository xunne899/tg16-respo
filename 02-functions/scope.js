function foobar(y){
y = y *2;
return y;
}

function boobar(x){
    x = x *2;
}

function replaceWith99(fruits) {
    fruits[0] = -99
}

function replaceBubble(name2){
    name2 = "Hello";
}

function replaceBubble2(bubbleObj2){
    bubbleObj2.bubbleName = "Hello";
    bubbleObj2["bubbleName"] ="World";
    bubbleObj2["House"] = "MBS";
}

let x = 100;
x = foobar(x) // 200

boobar(x); // what is value of x; 

foobar(x);
console.log (x);

let f = ["apples", "oranges", "bananas"];
let g = f;
replaceWith99(f);
console.log(f);
console.log(g);

let bubbleName = "bubble";
replaceBubble(bubbleName);
console.log(bubbleName);

let bubbleObj = { "bubbleName": "bubble", "age": 32}
replaceBubble2(bubbleObj);
console.log(bubbleObj);
delete bubbleObj["age"]
console.log(bubbleObj);
