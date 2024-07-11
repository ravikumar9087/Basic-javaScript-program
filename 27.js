// array push pop
// array shift unshift


// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// //push
// fruits.push("banana");
// console.log(fruits);

// //pop
// fruits.pop();
// console.log(fruits);

// let poppedFruit = fruits.pop();
// console.log("popped fruits is", poppedFruit);

// // unshift
// // add starting
// fruits.unshift("banana");
// console.log(fruits);

// // shift
// // remove starting
// fruits.shift();
// console.log(fruits);

// user prompt example

let fruits = ["apple", "mango", "grapes"];
let userInput = prompt(`Type a "fruits" for next`);

if(userInput=fruits){
    document.write("Fruits array:- ",fruits);
    document.write("<br>");
    let user = prompt("Enter a fruit name");
    fruits.push(user);
    document.write("You are successfully insert fruits :- ",user,"<br>",fruits);
}

