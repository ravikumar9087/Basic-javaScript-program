// primitive vs references data types

// primitives
let num1= 6;
let num2= num1;
console.log("Value is num1", num1);
console.log("value is num2",num2);
num1++;
console.log("After increment");
console.log("Value is num1", num1);
console.log("value is num2",num2);

// references types

let array1 = ["item1", "item2"];
let array2= array1;
console.log("Value is array1", array1);
console.log("value is array2",array2);
array1.push("item3");
console.log("After pushing element to array 1");
console.log("Value is array1", array1);
console.log("value is array2",array2);