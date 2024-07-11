// prototype
// javascript function ===> function + object

function hello (){ // present
    console.log("hello world");
}

// const hello = { // not present
//     key: "value"
// }
// console.log(hello.name); // show function name
// you can add your aow properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ------> tells function name;

// function provide more useful properties

console.log(hello.prototype);   //{}

// only function provide prototype property
if(hello.prototype){
    console.log('prototype present');
}
else{
    console.log("not present");
}

hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sum = function(){
    return "sum";
};

console.log(hello.prototype.abc);
console.log(hello.prototype.xyz);
console.log(hello.prototype.sum());


