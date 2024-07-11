// clone using Object.assign

// memory

const obj = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {...obj};//{key1: 'value1', key2: 'value2'}
//const obj2 = Object.assign({},obj) //{key1: 'value1', key2: 'value2'}

const obj2 = obj  //{key1: 'value1', key2: 'value2', key3: 'value3'}
obj.key3 = "value3"
console.log(obj2);
console.log(obj);