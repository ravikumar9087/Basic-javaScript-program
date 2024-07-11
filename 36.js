// objects //reference type stored in heap
// array are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create object

// const person={name:"Ravi", age:"20"};
// const person={
//     name:"Ravi",
//     age:"20",
//     hobbies:["cricket","badminton"]
// };

// console.log(person);

// // how to access data from object
// console.log(person.name,person.age); // dot
// console.log(person["name"]);  // brackets

// // how to add key value pair to objects
// person.gender= "male";
// console.log(person);


const person = {
    name : prompt("Enter a name"),
    age : prompt("Enter a age"),
    hoobies: prompt("Type a hoobies")
}

console.log(person);

