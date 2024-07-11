// parameter destructing

// object
// react 

const person ={
    firstname:"ravi",
    gender: "male"
}

// function printDetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

// destructing
function printDetails({firstname,gender}){
    console.log(firstname);
    console.log(gender);
}
printDetails(person);