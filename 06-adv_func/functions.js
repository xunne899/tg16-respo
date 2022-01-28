function foobar(x) {
    return x * -1;

}

function processNumber(func, number){
    return func(number);
}

console.log ('processNumber(foobar,10)', processNumber)