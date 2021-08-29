class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }
        target.res <= 0 ? console.log('Target dead') : console.log(`${this.name} hit ${target.name} for ${this.power} units`)

        return target;
    }
}
class Effect extends Card {
    constructor(name, cost, desc, stat, magnitude) {
        super(name, cost);
        this.desc = desc;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            (this.stat == 'resilience') ? target.res += this.magnitude :  target.power += this.magnitude;
            return target;
        }
        else {
            console.log('Must play effect card on unit ');
        }
    }
}
const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, `Increases targets resilience by 3`, 'resilience', 3);
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, `Reduce targets resilience by -2`, 'resilience', -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by", 'power', 2)
console.log(hardAlgo.play(redBeltNinja));
console.log(unhandledPromise.play(redBeltNinja));
console.log(pairProgramming.play(redBeltNinja));
console.log(redBeltNinja.attack(blackBeltNinja));

