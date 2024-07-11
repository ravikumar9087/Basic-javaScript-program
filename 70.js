// optional chaining

// if we have not any key present in a object 
//  example "address : {houseNumber : "1234"}"
// if we "console.log(user.address)" then it show undefined but when we "console.log(user.address.houseNumber)" it show error.
// if we get a data in late then we used " ? " to take a data in late like  "console.log(user?.address?.houseNumber) " then it n`t show error it show only undefined



const user = {
    firstName : "ravi",
    // address : {houseNumber : "1234"}
}

// let user;

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
