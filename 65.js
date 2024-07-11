// Iterables
// jispe hum for of loop lga sakte hain
// string and array

const firstName = "Ravi Kumar";
for(let char of firstName){
    console.log(char);
}

const arrays = ['item1', 'item2', 'item3'];
for(let arr of arrays){
    console.log(arr);
}


// array like object 
// jinke pas length property hoti hai
// aur jise hum index se access kar sakte hai
// ex string


const name = "Ravi Kumar";
console.log(name.length);
console.log(name[3]);
