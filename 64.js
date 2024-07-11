const myArray = ['item1', 'item2', 'item3'];

// insert
// myArray.splice(1, 0, 'item4');
// console.log(myArray);

// delete
// const deleteItem = myArray.splice(1, 2);
// console.log("Deleted item is: ", deleteItem);
// console.log(myArray);

// delete and insert 
const delItem = myArray.splice(0,1,'insert item4') ;
console.log(myArray);
console.log("delete item ",delItem);