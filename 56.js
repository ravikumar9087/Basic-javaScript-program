// map method

const numbers = [3,4,6,1,8];

const squareNumber = numbers.map((number, index)=>{
    return `${number*number} , ${index}`;
})

console.log(squareNumber);



const users = [
    {firstName:"Ravi", age:21},
    {firstName:"Vishal", age:22},
    {firstName:"Abhi", age:23},
    {firstName:"keshav", age:21},
]

const userDetail = users.map((user)=>{
    return `${user.firstName},${user.age}`
})

console.log(userDetail);
