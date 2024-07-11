
const user1 = {
    firstName : "ravi",
    age : 20,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

// user1.about();

// don't do this mistake
const myFunc = user1.about.bind(user1);
myFunc();