// super

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){ return `${this.name} is eating `;}

    isSuperCute(){ return this.age<=1; }

}


class Dog extends Animal{
   constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
   }
   run(){
    return  ` ${this.name} is running at ${this.speed}kmph` 
   }
}

const dogName = new Dog("tommy",3,45)
console.log(dogName);
console.log(dogName.eat());
console.log(dogName.isSuperCute());
console.log(dogName.run());



