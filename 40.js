// spread operator in objects

const obj = {
    key1 : "value1",
    key2 : "value2",
    key1 : 20
}

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4",
    key1 : "valueChange"
}

// const newObjects = {...obj1, ...obj2};
const newObjects = {...obj2, ...obj};
console.log(newObjects);

const neobject = {..."abc"};
console.log(neobject);


