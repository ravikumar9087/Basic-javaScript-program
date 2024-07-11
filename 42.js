// object inside array
// very useful in real world applications

const users = [
    {userId: 1,firstName: "Ravi", gender: "Male"},
    {userId: 2,firstName: "Abhi", gender: "Male"},
    {userId: 3,firstName: "Roshan", gender: "Male"},
]
// console.log(users);

for(let user of users){
    console.log(user.firstName,":",user.gender);
    console.log(user);


}