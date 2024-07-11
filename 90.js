// getter and setter

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static info() {
        return 'this is static class';
    } // we cant access by object only access by class name
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const user1 = new Person("ravi", "kumar", 9);

// console.log(user1.fullName);
// user1.setName("roshan", "singh")
// console.log(user1.firstName, user1.lastName);

user1.fullName = "roshan singh";
console.log(user1.fullName);
const info =  Person.info();
console.log(info);

