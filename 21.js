// while loop example

// sum of nth natural number
let num = 10;

// let total = 0;
// let  i = 0;
// while(i<=10){
//     total = total + i;
//     i++;
// }
// console.log(total);

// let total = (num*(num + 1))/2;
// console.log(total);

let userInput = +prompt("Enter a number");

let total = 0;
let  i = 0;
while(i<=userInput){
    total = total + i;
    i++;
}
console.log(total);
