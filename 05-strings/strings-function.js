let phrase = "the quick brown fox jumps over the lazy dog"

console.log("fourth character", phrase[3])
console.log("length of the phrase, phase.length");

// slice strings
// start slicing from index 3 all the way to the end
console.log("phrase.slice(3)", phrase.slice(3));
console.log ("phrase after slice",phrase)

console.log ("phrase.slice(6,12)", phrase.slice(6,12))


console.log ("phrase.slice(6,12)", phrase.slice());

// get a copy of string in upper case
console.log ("phrase.toUpperCase()", phrase.toUpperCase());

let s = "APPLES pears BANANAS"
console.log ("phrase.toLowerCase()", phrase.toLowerCase());

// original doenst changed, returns a copy of string

let w ="12345"
console.log("w.string", w.trim() +"!")

let w2 = "  12345"
console.log ("w2.trim", w2.trim() +"!")

console.log (phrase.includes("fox"));
console.log (phrase.includes("cat"));


console.log(phrase.indexOf("fox"));

let lunch  = "chicken rice, soya bean, bean milk, siew mai, satay, muffin";
console.log("", lunch.split(','))




