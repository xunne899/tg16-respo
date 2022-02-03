// function takes one perimeter , which is to be an array of numbers and returns its avg

// for - of - arrays
// for - in - objects
function findAverage(numbers){
    let total= 0 ;
    for (let n of numbers){
        console.log(n);
    }
    return total/numbers.length;
}

let average = findAverage([6,4,2]);
console.log(average)
findAverage([6,4,2])


let average2 = findAverage([6,4,2]);
console.log(average2)