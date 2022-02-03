// function takes one perimeter , which is to be an array of numbers and returns its avg

// for - of - arrays
// for - in - objects
function findAverage(numbers){

    if(numbers.length == 0 ){
        throw "Array is empty"
    }
    let total= 0 ;
    for (let n of numbers){
        console.log(n);
    }
    return total/numbers.length;
}

let average = findAverage([6,4,2]);
console.log(average)
findAverage([6,4,2])

try {
let average2 = findAverage([]);
console.log(average2)
}catch (e){
    console.log(e);
}

// let a = [];
// let s = 4 * 10 + findAverage(a)