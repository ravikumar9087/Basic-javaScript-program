// nested destructuring
const users = [
    {userId: 1,firstName: "Ravi", gender: "Male"},
    {userId: 2,firstName: "Abhi", gender: "Male"},
    {userId: 3,firstName: "Roshan", gender: "Male"},
]

// const [user1,user2,user3] = users;
const [{firstName: userFirstName}, , {gender}]= users;
console.log(userFirstName);
console.log(gender);