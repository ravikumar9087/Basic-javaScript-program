// callback function
// 1
// function myFunc(callback){
//     console.log("inside my func 1"); 
//     callback("ravi");
// }

// function myFunc2(name){
//     console.log("inside my func 2");  
//     console.log(`${name}`);

// }

// // myFunc(myFunc2()) //inside my func 2
// myFunc(myFunc2) 

// 2

// function sub(a,b){
//     return a-b;
// }


// function print(){
//     console.log(sub(3,2));
  
// }
// sub(print())

// 3

function array(a){
    a();
}

function a(b){
    console.log("this is print fn")
    console.log(b)
    
}
a(2);


