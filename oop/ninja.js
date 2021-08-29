class Ninja {
    constructor(name, speed = 3, strength = 3) {
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength
    }
    sayName(){
        console.log(`My name is: ${this.name}`);
    }
    showStats(){
        console.log(
            `Ninja Stats, Name: ${this.name}, Health: ${this.health}, Speed:${this.speed}, Strength:${this.strength}`
        )
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 10, 10)
        this.wisdom = wisdom;
        this.health = 200;
    }
    speakWisdom(){
        this.drinkSake();
        console.log(
            `If you give me 5 hours to chop down a cherry tree, I will spend four of those hours sharpening my axe.`
        );
        
    }
    
}
const ninja1 = new Ninja("Golden Boy");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
const sensei1 = new Sensei('Splinter')
console.log(sensei1.speakWisdom(), sensei1.showStats(), sensei1.sayName());