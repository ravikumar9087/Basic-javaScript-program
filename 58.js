// reduce

 
// const numbers = [3,4,6,1,8];

// const sum = numbers.reduce((accumulator, currentValue)=>{
//    return accumulator + currentValue;
// })

// console.log(sum);  

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 40000},
    {productId: 3, productName: "tv", price: 15000}
]
// give price of product
const productPrice = userCart.reduce((totalPrice, currentPrice)=>{
    return totalPrice + currentPrice.price;
},0)

console.log(productPrice);

