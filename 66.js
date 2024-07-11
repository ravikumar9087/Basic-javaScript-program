// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3,4]);
// console.log(numbers);

// const num = new Set();
// num.add('a');
// num.add('b');
// num.add(['a','b'])
// num.add(['a','b']) 
// if(num.has('c')){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }
// console.log(num);

// for (let nums of num){
//     console.log(nums);
// }


const myArray = [1,2,2,3,4,4,5,6]

const arr = new Set(myArray);
let length = 0;
for(let element of arr){
    length++;
}
console.log(length);
console.log(arr);
console.log(myArray);