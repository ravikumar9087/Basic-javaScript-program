// function returning function

function myFunc(){
    function hello(){
        return "hello";
    }
    return hello;
}

const ans = myFunc();
console.log(ans());
