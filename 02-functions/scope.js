function foobar(x){
x = x *2;
return x;
}

let x = 100;
x = foobar(x)
foobar(x);
console.log (x);

function replaceWith99(fruits) {
    fruits[0] = -99
}

let f = ["apples", "oranges", "bananas"];
replaceWith99(f);
console.log(f);