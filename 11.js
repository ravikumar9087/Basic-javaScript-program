//  undefined
let firstName;
console.log(typeof(firstName));
firstName="Ravi";
console.log(typeof(firstName),firstName);

// null
let myVar=null;
console.log(typeof(myVar)); // object (it is a bug/error in js)


// BigInt

let bigInt= BigInt(46);
let bigInt2= BigInt(46); // we used 46n to declare a bigInt variable
let bigInt3= 21;
console.log(typeof(bigInt3)); // number
console.log(typeof(bigInt)); // bigint
console.log(bigInt + bigInt2); // 92n
// console.log(bigInt + bigInt3); // it show error bcz type of variable is different


