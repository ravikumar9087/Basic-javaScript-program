// array destructuring


const fruits=["apple", "mango","banana", "lichi"];
// let myvar1=fruits[0];
// let myvar2= fruits[1];
// console.log(myvar1);
// console.log(myvar2);

// let [myvar1, ,  myvar2] = fruits;
let [myvar1,myvar2,...myNewArray] = fruits;
console.log(myvar1);
console.log(myvar2);
console.log(myNewArray);
