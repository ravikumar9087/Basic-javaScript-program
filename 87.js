// class practice and extend keyword

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){ return `${this.name} is eating `;}

    isSuperCute(){ return this.age<=1; }

}

// const animal1 = new Animal("dog",1)
// console.log(animal1);
// console.log(dog.eat());
// console.log(animal1.isSuperCute());


class Dog extends Animal{
    breed(){
        console.log("pug");
    }
}

const dogName = new Dog("tommy",1)
console.log(dogName);
dogName.breed();
console.log(dogName.eat());
console.log(dogName.isSuperCute());

