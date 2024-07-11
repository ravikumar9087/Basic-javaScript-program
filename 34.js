// for in loop in array
const fruits=["apple", "mango"];
const fruits2 = [];
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
    // console.log(index);
}
console.log(fruits2);
