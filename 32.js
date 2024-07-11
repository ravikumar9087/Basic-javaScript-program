// while loop in array
const fruits=["apple", "mango"];
let i=0;
const fruits2=[];
while(i<fruits.length){
    // console.log(fruits[i]);
    // console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);