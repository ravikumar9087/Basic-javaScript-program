// computed properties

const key1 = "objectkey1";
const key2 = "objectkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    [key1] : value1,
    [key2] : [value2]
}
console.log(obj)

// // 2 type
// const obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);
