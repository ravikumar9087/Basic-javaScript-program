// sort Method
const numbers = [1,4,20,5,3,7,6];
numbers.sort((a,b)=>a-b)
console.log(numbers);
numbers.sort((a,b)=>b-a)
console.log(numbers);

// 1 - 4 ---> (-3)negative it print 1, 4 (a,b)
// 20 - 5 ----> (15)positive it print 5, 20 (b,a)

// ASCII table


const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 40000},
    {productId: 3, productName: "tv", price: 15000}
]

const lowToHigh = userCart.slice(0).sort((a,b)=>{
    return a.price-b.price
})

const highToLow = userCart.slice(0).sort((a,b)=>{
    return b.price-a.price
})

console.log(lowToHigh);
console.log(highToLow);

