// new keyword
// 1. empty object this = {}
// 2. return this
// 3. it give space (prototype)

// function person(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// person.prototype.info = function(){
//     console.log(this.firstName, this.age);
// }

// const user = new person("ravi", 20);
// user.info();


function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`
},

CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.play = function () {
    return  "play football";
}


const user = new CreateUser('ravi', 'kumar', 'ravi@gmail.com', '20', 'my address');
console.log(user);
console.log(user.about());
console.log(user.is18());
console.log(user.play());
