// how to iterate object

// const key="email"
const person={
    name:"Ravi",
    age:20,
    "hobbies":["cricket","badminton"]
};

// for in loop
// for(let key in person){
//     // console.log(`${key}: ${person[key]}`);
//     // console.log(key,person[key]);
//     console.log(key," ", person[key]);
// }

// object.keys
// console.log(typeof (Object.keys(person)));
// const val= Array.isArray(Object.keys(person));
// console.log(val);


// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }