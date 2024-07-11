// and or operator

let firstName="Ravi";
let age=16;
// if(firstName[0]==="R"){
//     console.log("your name start with R")
// }

// if(age<18){
//     console.log("your age less 18");;
// }

// And both condition are true
// if(firstName[0] == "R"   &&  age>18){
//     console.log("name starts with R and above 18");
// }

// else{
//     console.log("condition is not match");
// }


// or it check only 1 condition
if(firstName[0] == "R" || age>18){
    console.log(`name starts with ${firstName[0]} and greater than ${age}`);
}

else{
    console.log("condition is not match");
}