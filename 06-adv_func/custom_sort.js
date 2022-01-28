function compare(a,b){
    return a -b;
    // 0 , a ==b
    // -1, a < b
    // 1, b > a
}

function compare2(a,b){

    if (a > b){
        return 1;
    } else if (a<b){
        return -1 
    } else (b == a)
    return  0 
}



let numbers = [101, 1,10,11,8, 23,15,7,0,-1]
// please sort the numbers array
numbers.sort(compare);
console.log(numbers);





let names = ["Alices", "Bob" , "Cindy", "Donavan"]
names.sort(compareStringLength);
console.log(names);

function compareStringLength (a,b) {
    return a.length - b.length
}


let numbers =[10,11,1,2,21,23]
numbers.sort(functions(a,b){
    return a -b;
})

numbers.sort((a,b)=>a-b);