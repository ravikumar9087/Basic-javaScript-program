// methods
// function inside object

function personAbout(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person = {
    firstName : "ravi",
    age : 20,
    about : personAbout
}
const person2 = {
    firstName : "keshav",
    age : 20,
    about : personAbout
}
const person3 = {
    firstName : "roshan",
    age : 21,
    about : personAbout
}
const person4 = {
    firstName : "abhi",
    age : 22,
    about : personAbout
}
person.about();
person2.about();
person3.about();
person4.about();


