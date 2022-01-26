//  const pi = 3.14; // cannot be reassigned
//  pi = 3.1417;
//  console.log(pi);

 // traditional programer's ideas of const
 // const is used to reflect values that have
 // impt in program does not change 
 //values have semantic significant 
 
 const gst = 0.07;

 // significant  of JS developers ue const for 
 // any variables that will not be reassigned 
 const weight = 87;
 const height = 1.71;
 console.log(weight/height **2 );
// do not use var 

let fruits = [ " apples", "oranges", "bananas"] 

const primes = [11,17,21]
primes[0] = 13; // assign to one element, not affected by const
console.log(primes);
primes = [15,17,21]; // reassign entire array , therefore affected by 
                    // by const and will crash 