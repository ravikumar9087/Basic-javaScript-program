// differences b/w dot and bracket notation
const key="email"
const person={
    name:"Ravi",
    age:"20",
    "hobbies":["cricket","badminton"]
};
console.log(person["hobbies"]);

person[key]="ravi@gmail.com"; // store email
person.key="ravi@gmail.com"; // store key 

console.log(person);

