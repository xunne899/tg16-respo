let fruits = ['apples','oranges','pineapples','bananas']
for(let f of fruits){
    console.log(f);
}
//empty objs are falsely
let o ={};
o.foodName = "chicken rice";
o.calories=600;
o.price = 4.50;
o.author = "Paul";
console.log(o)

// of - arrays
// in - objs
for (let propertyName in o){
    //extract out property name one at a time and store in propertyName

 console.log(food[propertyName]); }
 
//  ==> food['foodname'] = chicken rice
//==> food['calories'] = 600
//