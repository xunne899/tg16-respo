function f1() {
    console.log("f1");
    return true;
}

function f2() {
    console.log("f2");
    return false;
}

console.log (f1()|| f2());

let n1 = 3;
let n2 = 10 ;
console.log(n2 <10 && n1-n2 >100 && n2-n1< 100 && n1 ===3);
console.log ('.....');
console.log (f2() &&)