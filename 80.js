const obj1 = {
    key : "value",
    key2 : "value2"
}

// const obj2 = {
//     key3 : "value3",
// }

// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key);

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2.key3);
console.log(obj2.key2);
console.log(obj2.__proto__);
