// lexical scope

/* when we declare a variable in outside the function then we declare the same variable name inside the function it show the value of inside the variable,
when we can,t declare the variable inside the function it show the value of outside the variable.

*/

// const app = () =>{
//     const myVar= "value1"
//     const myFunc = () =>{
//         const myVar= "value2"
//         console.log("Hello world", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// app();



const myVar= "value1"
const app = () =>{
    const myFunc = () =>{
        console.log("Hello world", myVar);
    }
    console.log(myVar);
    myFunc();
}
app();