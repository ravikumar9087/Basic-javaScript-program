// block scope vs function scope

// let and const are block scope
// it show errors
// {
//     let firstName = "ravi";
// }
// console.log(firstName);


// var is function scope
// it give output
{
    var firstName = "ravi";
}
console.log(firstName);