// with the help of new keyword

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

const user = new CreateUser('ravi', 'kumar', 'ravi@gmail.com', '20', 'my address');
console.log(user);
console.log(user.about());
console.log(user.is18());

for(let key in user){
    // console.log(key);
    if(user.hasOwnProperty(key)){
        console.log(key);
    }
}