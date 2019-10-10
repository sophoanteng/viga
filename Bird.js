class Bird{
    setName(good){
        this.well = good;
    }
    setPicture(cool){
        this.well = cool;
    }
    run(){
        console.log("so fast");
    }
    walk(){
        console.log("so slow");
    }
    eat(){
        console.log("Eat other animal");
    }
    getName(){
        console.log("good");
    }
    getPicture(){
        console.log("Beautiful");
    }
} 
class Dog extends Bird{
    bite(){
        console.log("The dog can bite");
    }
}
const dog1 = new Dog();
dog1.eat();
dog1.run();
dog1.getName();
dog1.getPicture();
dog1.bite();