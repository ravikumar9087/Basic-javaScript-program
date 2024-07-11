// // functions
// // without paratmeter pass
// function singHB(){
//     console.log("Happy Birthday to you...");
// }
// singHB();

// //  paratmeter pass

// function sum(num1,num2){
//     return num1 + num2;
// }
// console.log(sum(3,4));


// // even odd
// let user = +prompt("Enter a number");

// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(user));






// // function declaration
// // input: string
// // output: first character

// let user = prompt("Enter a name");
// let index = +prompt("Enter a index value to see the character")
// function firstChar(string){
//     return string[index];
// }
// console.log(firstChar(user));




// // input: array, target
// // output: index of target if target present in array
// // function expression
// const array= function (array,target){
//     for(let i=0; i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// let inputArray = [];
// let size = +prompt("Enter the size");

// for(var i=0; i<size; i++) {
// 	inputArray[i] = +prompt('Enter Element ' + (i+1));
// }

// let findNumber = +prompt("Enter number to find the index value");
// const ans = array(inputArray,findNumber);
// console.log(inputArray);
// console.log(ans);