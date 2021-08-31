/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const { all } = require("micromatch");

const user = {
  name: "Kermit",
  email: "kermit@sesame.org",
  friend: {
    name: "Miss Piggy",
    email: "piggy@sesame.org"
  }
}
console.log(user);


class Vehicle {
  constructor(manufacturer, model, color) {
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color
  }

  drive() {
    this.miles += 50;
    console.log(
      `You drove your ${this.constructor.name} and it now has ${this.miles} on it.`
    )
  }

  // eslint-disable-next-line class-methods-use-this
  parentFunc() {
    return "This is coming from the parent!";
  }
}

class M5 extends Vehicle {
  constructor(color) {
    super('BMW', 'M5', color);
    this.hp = 750;
  }

  childFunc() {
    const message = this.parentFunc()
    return message;
  }

  printSpecSummary() {
    console.log(
      `BMW MS with a 4.4L V8 TWIN TURBO engine packing ${this.hp}HP and 554lb of torque.`
    )
  }
}
const turbo = new M5('black');
console.log(turbo.color);
console.log(turbo.miles);
turbo.drive()
console.log(turbo.miles);
const car = new Vehicle("BMW", "i3", "black");
car.drive();
console.log(car.miles);
console.log(turbo.childFunc());
module.exports = { user, Vehicle, M5 }
