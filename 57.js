// filter merhod

const numbers = [1,2,3,4,5,6]

const isEven = numbers.filter((number)=>{
    return number%2===0;
})
const isOdd = numbers.filter((number)=>{
    return number%2!==0;
})
console.log(isEven,isOdd);