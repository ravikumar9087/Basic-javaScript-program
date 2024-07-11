// intro to arrays

// how to create arrays

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4,5,6,7];
// console.log(fruits[1]);
// console.log(numbers[2]);

// fruits[1] = "banana";
// console.log(fruits[1]);
// console.log(typeof fruits);

// console.log(Array.isArray(fruits)); // find array or not


//  array indexing

let arrayNumber = [1,5,6,8];
console.log(arrayNumber);

let userInput = +prompt("choose the number 0 to 9");

if(userInput===arrayNumber[0] || userInput===arrayNumber[1] || userInput===arrayNumber[2] || userInput===arrayNumber[3] ){
    //   console.log("winner");
      let user = +prompt("Enter a number for change the value");
      arrayNumber = user;
    //   console.log(arrayNumber[0]);
      console.log("After change the value the array is",arrayNumber);
}

else{
    console.log("looser");
}

