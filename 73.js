// call, apply , bind methods


// call 

function about(hobby, favMusician){
    console.log(this.firstName, this.age,hobby, favMusician);
}
const user1 = {
    firstName : "ravi",
    age : 20,
}

const user2 = {
    firstName : "roshan",
    age : 21,
    
}
// about.call(user1,"guitar","moazrt")

// apply
// about.apply(user1,["guitar","bach"])

// bind
const func = about.bind(user2,"guitar","bach")
func()