// objects store key/values pairs , just like in python 

let fruits = {
 // curly braces means obk=jects
    'a' :'apples',
    'b' :'bananas',
    'c' :'cheeries',
    
}
console.log((fruits['b']));
console.log((fruits['c']));

// use dot notation 
// a is not string
console.log(fruits.a)

// valid variable name in javascript

let student = {
    'first name': 'John'
}
console.log(student['first name'])
// console.log first name // space is not valid  ... use [] can have space inside


let recipe = {
    title : "spicy Fried Chicken",
    calories:800,
    "number of servings" : 3,
}

// diff from python dict, objs in js can store functions

let spaceship = {
    speed: 10,
    calDistTrav: function(time){
        console.log("attempting to cal distance trav")
       return this.speed *time;
    }
}

let starDestroyer = {
    speed: 25,
    calDistTrav: function(time){
        console.log("attempting to cal distance trav")
        return this.speed *time**1.5;
    }
}
console.log(spaceship.calDistTrav(10));
console.log(starDestroyer.calDistTrav(10));






