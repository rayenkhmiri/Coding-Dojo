class Ninja{
    constructor(name, health = 90 , speed=3 , strength = 3 ){
        this.name = name;
        this.health = health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName(){
        console.log(`My name is ${this.name}.`);
    }

    showStats(){
        console.log(`Name : ${this.name}`);
        console.log(`strength: ${this.strength}.`);
        console.log(`speed: ${this.speed}.`);
        console.log(`health: ${this.health}.`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`$(this.name) drank sake and gained 10 health . health is now ${this.health} .`)

    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja{
    constructor(name, health = 200 , speed=10 , strength = 10 , wisdom=10){
        super(name, health, speed , strength)
        this.name = name;
        this.health = health;
        this.speed=speed;
        this.strength=strength;
        this.wisdom=wisdom;
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")    
    }
}


const ninja2 = new Sensei("bhim");
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.speakWisdom();


