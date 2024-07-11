// important array methods
// forEach

// const numbers = [4,2,5,8]

// function myFunc(number, index){
//     console.log(`index is ${index}
//         number is ${number} `);
// }

// for(let i =0; i<numbers.length; i++){
//     myFunc(numbers[i],i)
// }

// forEach
// numbers.forEach(myFunc);

// numbers.forEach(function myFunc(number, index){
//         console.log(`index is ${index}
//             number is ${number} and  ${number}*2 = ${number*2} `);
//     }
// );


const users = [
    {firstName:"Ravi", age:21},
    {firstName:"Vishal", age:22},
    {firstName:"Abhi", age:23},
    {firstName:"keshav", age:21},
]

// users.forEach(function myFunc(obj){
//     console.log(obj.firstName)
// })

users.forEach((obj, index)=>{
    console.log(obj.firstName, index)
})

