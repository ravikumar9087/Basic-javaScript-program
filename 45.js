// arrow functions
const singHB = () => {
    console.log("Happy birthday to you...");
}
singHB();

const sum = (number1, number2) => {
    return number1 + number2;
}
console.log(sum(3,2));

// const isEven = (number) => // if i have only 1 parameter then i remove the brackets
// const isEven = number =>{
//     if(number % 2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(2));

//2 step

const isEven = number => number % 2===0;
console.log(isEven(2));
