// solution using object.create
const userMethod = {

    about : function () {
        return `${this.firstName} is ${this.age} years old`
    },

    is18 : function () {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address,) {
    const user = Object.create(userMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user = createUser('ravi', 'kumar', 'ravi@gmail.com', '20', 'my address');
console.log(user);
console.log(user.about());
console.log(user.is18());