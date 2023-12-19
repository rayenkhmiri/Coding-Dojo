class Ninja{
    constructor(name, health = 90 , speed , strength = 3 ){
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
