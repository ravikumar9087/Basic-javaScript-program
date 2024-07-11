// create function to create multiple objects
// function (that fn create object)
// add key value pair
// object ko return krega

function createUser(firstName, lastName, email, age, address, about, is18){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };

    user.is18 = function(){
        return this.age>=18;
    };
    return user;
}

const user = createUser('ravi','kumar','ravi@gmail.com','20','my address');
console.log(user);
const is18 = user.is18();
console.log(is18);
const about = user.about();
console.log(about);

