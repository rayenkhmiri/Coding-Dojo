class Card {
    constructor (name , cost){
        this.name = name ; 
        this.cost = cost ;
    }
}
class Unit extends Card{
    constructor (name , cost , power , res){
        super (name , cost);
        this.power = power ; 
        this.resilience = this.resilience ;
    }
    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.attack ;
        }
        else{
            throw new ERROR('Target must be a unit!');
        }
    }
}
class Effect extends Card {
    constructor (name , cost , text , stat , magnitude) {
        super (name , cost );
        this.text = text ; 
        this.stat = stat ; 
        this.magnitude = magnitude ; 
    }
    play(target){
        if (target instanceof Unit){
            if (this.stat === 'resilience'){
                target.resilience += this.magnitude
            }
            else if (this.stat === 'power'){
                target.power += this.magnitude
            }
        }
        else{
            throw new ERROR('Target must be a unit!');
        }
    }
}
const redBeltNinja = new Unit ("Red Belt Ninja",3,3,4);
const BlackBeltNinja = new Unit ("Black Belt Ninja",4,5,4);


const HardAlgo = new Effect ("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const UnhandledPromiseRejection = new Effect ("Unhandled Promise Rejection",1,"	reduce target's resilience by 2","resilience",-2);
const PairProgramming = new Effect ("Pair Programming",3,"increase target's power by 2","power",2);

UnhandledPromiseRejection.play(redBeltNinja);
PairProgramming.play(redBeltNinja);
redBeltNinja.attack(BlackBeltNinja);