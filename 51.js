// rest parameter

/* when we have a declare limited parameter like my func(a,b,c)
and we pass the more than 3 argument like myfunc(2,3,4,5) we cant get 5 in the output 
we have solution we make c parameter to restProps(...c) it show all the rest output in the form of array

*/

// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(2,3,4,5) // 5 not shown
// function myFunc1(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);
// }

// myFunc1(2,3,4,5,6,7,8) // 5,6,7,8 shown in the form of array with c 

// example sum 
function addall(...numbers){
    let total=0
    for(let number of numbers){
        total = total + number;
    }
    return total;
    
}
const ans = addall(2,3,4,5);
console.log(ans);
