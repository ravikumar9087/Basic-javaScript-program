// short syntax

const user1 = {
    firstName : "ravi",
    age : 20,
    about(){
        console.log(this.firstName, this.age);
    }
}

user1.about();