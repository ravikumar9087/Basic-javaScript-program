// Map

const person = new Map([
    ["firstName","Ravi"],
    ["age",20],
    [1,"one"],
    [2,"two"]
])
// const person = new Map()
// person.set("firstName","Ravi");
// person.set("age",20);
// person.set(1,"one");
// person.set(2,"two");

console.log(person);
console.log(person.get('firstName'));

if (person.has('firstName')){
    console.log("present");
}else{
    console.log("not present");
}

console.log(person.size);
// console.log(person.clear("firstName"));
// console.log(person);
console.log(person.keys());

for(let [key, value] of person){
    console.log(key);
}






  