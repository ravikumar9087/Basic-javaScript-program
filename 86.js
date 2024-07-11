// 2015  /  es6
// class keyword
// class are fake
class  CreateUser {
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){ return `${this.firstName} is ${this.age} years old`}
    
    is18(){  return this.age >= 18;}

    sum(a,b){ return a+b; }
}

const user = new CreateUser('ravi', 'kumar', 'ravi@gmail.com', '20', 'my address');
console.log(user.firstName);
console.log(user.about());
console.log(user.is18());
console.log(user.sum(2,3));

console.log(Object.getPrototypeOf(user));